import React, { ReactNode } from "react";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <>
      <Navigation />
      {props.meta}
      <PageTransition>
        <div className="flex flex-col justify-center px-8">
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
            {props.children}
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export { Main };
