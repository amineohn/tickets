import React from "react";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import PageTransition from "../components/PageTransition";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Follow Ups"
          description="Monitoring of the concerns of the person related to the computer station"
        />
      }
    >
      <div className="flex-col items-center">
        <PageTransition>
          <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-t dark:from-indigo-200 dark:to-indigo-400">
            Follow Ups
          </h1>
        </PageTransition>
      </div>
    </Main>
  );
};

export default Index;
