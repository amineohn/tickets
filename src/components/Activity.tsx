import { useEffect, useMemo, useState } from "react";

import { discordId } from "../constants/constants";
import { Presence } from "../types/Lanyard";

enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum EventType {
  INIT_STATE = "INIT_STATE",
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
}

type SocketEvent = {
  op: Operation;
  t?: EventType;
  d: Presence | unknown;
};
const Activity = ({
  setActive,
}: { setActive: (active: boolean) => void } & any) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [doing, setDoing] = useState<Presence>();
  const send = (op: Operation, d?: unknown): void => {
    if (socket !== null) socket.send(JSON.stringify({ op, d }));
  };

  useEffect(() => {
    if (socket === null) return () => {};

    socket.onmessage = function ({ data }: MessageEvent): void {
      const { op, t, d }: SocketEvent = JSON.parse(data);

      if (op === Operation.Hello) {
        setInterval(
          () => send(Operation.Heartbeat),
          (d as { heartbeat_interval: number }).heartbeat_interval
        );
        send(Operation.Initialize, { subscribe_to_id: discordId });
      } else if (op === Operation.Event && t) {
        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t))
          setDoing(d as Presence);
      }
    };

    socket.onclose = () => {
      setSocket(null);
    };
  }, [socket]);
  useEffect(() => {
    if (!socket) setSocket(new WebSocket("wss://api.lanyard.rest/socket"));
  }, [socket]);

  const currentActivity = useMemo(
    () => doing?.activities.filter((activity) => activity.type === 0)[0],
    [doing]
  );

  useEffect(() => {
    setActive(currentActivity);
  }, [currentActivity]);

  if (!doing || !doing?.discord_status) return null;

  const name = currentActivity?.name?.replace("Code", "Visual Studio Code");
  const replaced =
    currentActivity?.state?.replace("📁 ", "")?.split(" | ")?.[0] ||
    "a file".replace(`${[0]}.tsx`, `${[0]}`);
  return (
    <>
      {currentActivity ? (
        <>
          <div className="flex items-center space-x-4 text-gray-700 rounded-md dark:text-gray-300">
            {currentActivity.assets ? (
              <>
                <img
                  src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.large_image}.png`}
                  className="flex-shrink-0 w-16 h-16 rounded-full"
                />
              </>
            ) : null}
            <div className="text-sm leading-tight truncate">
              {currentActivity ? (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-black text-black dark:text-white">
                        {name}{" "}
                      </span>
                    </div>
                    {currentActivity.state ? (
                      <span className="text-black dark:text-white">
                        {replaced}
                      </span>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Activity;
