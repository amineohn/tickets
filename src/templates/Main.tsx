import React, { ReactNode, useState } from "react";
import Spotify from "../components/Spotify";
import Activity from "../components/Activity";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [presenceActive, setPresenceActive] = useState(false);
  return (
    <>
      <Navigation />
      {props.meta}
      <PageTransition>
        <div className="flex flex-col justify-center px-8">
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
            {props.children}
          </div>
          <div className="sticky bottom-0 bg-gray-200 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 md:bg-transparent rounded-2xl p-4">
            <Activity
              setActive={setPresenceActive}
              style={{ display: presenceActive ? "block" : "none" }}
            />
            <Spotify />
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export { Main };
