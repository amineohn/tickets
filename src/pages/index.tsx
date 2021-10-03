import React from "react";
import PageTransition from "../components/PageTransition";
import ReportTicket from "../components/ReportTicket";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Ticket = () => {
  return (
    <>
      <Main
        meta={
          <Meta
            title="Ticket System"
            description="Ticket system for a computer help request"
          />
        }
      >
        <div className="sticky top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white dark:bg-black md:my-36 dark:text-gray-100">
          <div className="flex flex-col justify-center px-8">
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
              <PageTransition>
                <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-t dark:from-indigo-200 dark:to-indigo-400">
                  Tickets
                </h1>
                <ReportTicket />
              </PageTransition>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};
export default Ticket;
