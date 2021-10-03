import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import PageTransition from "./PageTransition";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [, setName] = useState("");
  const [, setMail] = useState("");
  const [, setMessage] = useState("");

  const onMailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (data) =>
    window.open(
      `mailto:aouhani@actes-atlantique.fr?body=${encodeURIComponent(
        `[Mail] \n\n Name: ${data.name} \n Mail: ${data.email} \n\n${data.message}`
      )}`
    );
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-4 -mx-2">
          <div className="w-1/2 px-2">
            <input
              onChange={onMailChange}
              className="block w-full px-4 py-3 leading-tight text-gray-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-gray-900 bg-gray-100 hover:bg-gray-200 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 dark:text-white focus:outline-none dark:focus:bg-opacity-50 dark:focus:bg-gray-800 dark:placeholder-white"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <PageTransition>
                <span
                  role="alert"
                  className="text-red-500 font-medium inline-flex mt-2"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="stroke-current text-red-500 stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 20L22 68C22 70.2091 23.7909 72 26 72H54C56.2091 72 58 70.2091 58 68L58 20C58 17.7909 56.2091 16 54 16H26C23.7909 16 22 17.7909 22 20Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M48 8H32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M40 44.9995V34M40 54V53.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Required fields.
                </span>
              </PageTransition>
            )}
          </div>
          <div className="w-1/2 px-2">
            <input
              onChange={onNameChange}
              className="block w-full px-4 py-3 leading-tight text-gray-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-gray-900 bg-gray-100 hover:bg-gray-200 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 dark:text-white focus:outline-none dark:focus:bg-opacity-50 dark:focus:bg-gray-800 dark:placeholder-white"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <PageTransition>
                <span
                  role="alert"
                  className="text-red-500 font-medium inline-flex mt-2"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="stroke-current text-red-500 stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 20L22 68C22 70.2091 23.7909 72 26 72H54C56.2091 72 58 70.2091 58 68L58 20C58 17.7909 56.2091 16 54 16H26C23.7909 16 22 17.7909 22 20Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M48 8H32"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M40 44.9995V34M40 54V53.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Required fields.
                </span>
              </PageTransition>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            onChange={onMessageChange}
            className="block w-full px-4 py-3 leading-tight text-gray-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-gray-900 bg-gray-100 hover:bg-gray-200 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 dark:text-white focus:outline-none dark:focus:bg-opacity-50 dark:focus:bg-gray-800 dark:placeholder-white"
            placeholder="Write something..."
            rows={5}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <PageTransition>
              <span
                role="alert"
                className="text-red-500 font-medium inline-flex mt-2"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 80 80"
                  fill="none"
                  className="stroke-current text-red-500 stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 20L22 68C22 70.2091 23.7909 72 26 72H54C56.2091 72 58 70.2091 58 68L58 20C58 17.7909 56.2091 16 54 16H26C23.7909 16 22 17.7909 22 20Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M48 8H32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M40 44.9995V34M40 54V53.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Required fields.
              </span>
            </PageTransition>
          )}
        </div>
        <div className="inline-flex items-center justify-center mb-1">
          <button
            aria-label="Submit"
            className="inline-block px-5 py-2 m-0 font-semibold text-gray-50 transition rounded-md bg-opacity-50 bg-green-400 hover:bg-green-500 duration-150 dark:text-white"
          >
            <span className="my-2 mr-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 80 80"
                className="inline mb-0.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40 66C54.3594 66 66 54.3594 66 40C66 25.6406 54.3594 14 40 14C25.6406 14 14 25.6406 14 40C14 46.5596 16.4291 52.5518 20.4369 57.1261L16 66L40 66Z"
                  fill="currentColor"
                />
                <path
                  d="M40 66V68V66ZM20.4369 57.1261L22.2258 58.0206C22.5892 57.2938 22.4767 56.4193 21.9412 55.8082L20.4369 57.1261ZM16 66L14.2111 65.1056C13.9012 65.7255 13.9343 66.4618 14.2987 67.0515C14.6631 67.6411 15.3068 68 16 68L16 66ZM64 40C64 53.2548 53.2548 64 40 64V68C55.464 68 68 55.464 68 40H64ZM40 16C53.2548 16 64 26.7452 64 40H68C68 24.536 55.464 12 40 12V16ZM16 40C16 26.7452 26.7452 16 40 16V12C24.536 12 12 24.536 12 40H16ZM21.9412 55.8082C18.2407 51.5845 16 46.0564 16 40H12C12 47.0627 14.6176 53.519 18.9326 58.4441L21.9412 55.8082ZM17.7889 66.8944L22.2258 58.0206L18.6481 56.2317L14.2111 65.1056L17.7889 66.8944ZM40 64L16 64L16 68L40 68V64Z"
                  fill="currentColor"
                />
              </svg>
              Send
            </span>
          </button>
          {isSubmitSuccessful && (
            <PageTransition>
              <span
                role="alert"
                className="text-green-500 font-medium inline-flex ml-2"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 80 80"
                  fill="none"
                  className="stroke-current text-green-500 stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 20L22 68C22 70.2091 23.7909 72 26 72H54C56.2091 72 58 70.2091 58 68L58 20C58 17.7909 56.2091 16 54 16H26C23.7909 16 22 17.7909 22 20Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M48 8H32"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M40 44.9995V34M40 54V53.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Message as been send
              </span>
            </PageTransition>
          )}
        </div>
      </form>
    </div>
  );
};
export default Contact;
