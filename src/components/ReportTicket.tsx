import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import PageTransition from "./PageTransition";
const ReportTicket = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [, setName] = useState("");
  const [, setLastName] = useState("");
  const [, setType] = useState("");
  const [, setMessage] = useState("");

  const onTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (data) =>
    window.open(
      `mailto:aouhani@actes-atlantique.fr?body=${encodeURIComponent(
        `[Demande d'aide]\n\n Nom: ${data.firstName} \n Prénom: ${data.lastName} \n Type: [${data.type}] \n\n Description du problème: \n ${data.message}`
      )}`
    );
  return (
    <PageTransition>
      <div className="w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mb-4 -mx-2">
            <div className="w-1/2 px-2">
              <input
                onChange={onNameChange}
                className="block w-full px-4 py-3 leading-tight text-gray-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-gray-900 bg-gray-100 hover:bg-gray-200 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 dark:text-white focus:outline-none dark:focus:bg-opacity-50 dark:focus:bg-gray-800 dark:placeholder-white"
                type="text"
                name="firstName"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
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
                onChange={onLastNameChange}
                className="block w-full px-4 py-3 leading-tight text-gray-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-gray-900 hover:bg-gray-200 bg-gray-100 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 dark:text-white focus:outline-none dark:focus:bg-opacity-50 dark:focus:bg-gray-800 dark:placeholder-white"
                type="text"
                name="lastName"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
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
                onChange={onTypeChange}
                className="block w-full px-4 py-3 leading-tight text-gray-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-gray-900 hover:bg-gray-200 bg-gray-100 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 dark:text-white focus:outline-none dark:focus:bg-opacity-50 dark:focus:bg-gray-800 dark:placeholder-white"
                type="text"
                name="type"
                placeholder="Type Issue"
                {...register("type", { required: true })}
              />
              {errors.type && (
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
              className="block w-full px-4 py-3 leading-tight text-gray-700 transition rounded-md duration-200 appearance-none p-4 dark:bg-gray-900 hover:bg-gray-200 bg-gray-100 bg-opacity-50 dark:bg-opacity-50 md:bg-opacity-100 dark:text-white focus:outline-none dark:focus:bg-opacity-50 dark:focus:bg-gray-800 dark:placeholder-white"
              placeholder="Write something..."
              name="message"
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
              <span className="my-2 mr-1">Send</span>
            </button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
};
export default ReportTicket;
