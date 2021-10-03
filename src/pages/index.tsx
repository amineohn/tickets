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
                <div className="flex justify-center p-1.5">
                  <p className="font-semibold text-3xl">Tickets</p>
                </div>
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
