import { useEffect, useState } from "react";

import { discordId } from "../constants/constants";
import { Presence } from "../types/Lanyard";
import FadeIn from "react-fade-in";

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
const Spotify = () => {
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

  if (!doing || !doing?.discord_status) return null;
  return (
    <>
      <FadeIn>
        {doing?.listening_to_spotify ? (
          <>
            <div className="sticky bottom-0 flex flex-row-reverse sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full mt-4	ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-black dark:text-white rounded-2xl"
              >
                <rect
                  className="eq-bar eq-bar--1"
                  x="4"
                  y="4"
                  width="3.7"
                  height="8"
                />
                <rect
                  className="eq-bar eq-bar--2"
                  x="10.2"
                  y="4"
                  width="3.7"
                  height="16"
                />
                <rect
                  className="eq-bar eq-bar--3"
                  x="16.3"
                  y="4"
                  width="3.7"
                  height="11"
                />
              </svg>
              <svg className="h-4 w-4 ml-auto mt-1" viewBox="0 0 168 168">
                <path
                  fill="#1ED760"
                  d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                />
              </svg>
              <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
                <a
                  className="text-gray-800 dark:text-gray-200 font-medium  max-w-max truncate"
                  href={`https://open.spotify.com/track/${doing?.spotify.track_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doing?.listening_to_spotify ? (
                    <>{doing.spotify.song.replace(/\&/g, "and")}</>
                  ) : null}
                </a>
                <span className="mx-2 text-gray-500 dark:text-gray-300 hidden sm:block">
                  {" – "}
                </span>
                <p className="text-gray-500 dark:text-gray-300 max-w-max truncate">
                  {doing.spotify.artist
                    .replace(/\;/g, ",")
                    .replace(/\&/g, "and")}{" "}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="sticky bottom-0 flex flex-row-reverse sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full mt-4	ml-2	">
              <svg className="h-4 w-4 ml-auto mt-1" viewBox="0 0 168 168">
                <path
                  fill="#1ED760"
                  d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                ></path>
              </svg>
              <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  Not Playing
                </p>
                <span className="mx-2 text-gray-500 dark:text-gray-300 hidden sm:block">
                  {" "}
                  –{" "}
                </span>
                <p className="text-gray-500 dark:text-gray-300 max-w-max truncate">
                  Spotify
                </p>
              </div>
            </div>
          </>
        )}
      </FadeIn>
    </>
  );
};
export default Spotify;
