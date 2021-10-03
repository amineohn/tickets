import { ThemeSwitcher } from "./ThemeSwitcher";
import { useRouter } from "next/router";
const Navigation = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white dark:bg-black md:my-8 dark:text-gray-100">
      <ThemeSwitcher />
      <div>
        <a
          onClick={() => router.push("/")}
          className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-indigo-400 dark:hover:text-indigo-300"
        >
          Ticket
        </a>
        <a
          onClick={() => router.push("/follow-ups")}
          className="p-1 font-medium text-gray-900 transition cursor-pointer sm:p-4 sm:pb-1.5 sm:pt-1.5 rounded-full dark:text-gray-100 hover:text-indigo-400 dark:hover:text-indigo-300"
        >
          Follow-ups
        </a>
      </div>
    </div>
  );
};

export default Navigation;
