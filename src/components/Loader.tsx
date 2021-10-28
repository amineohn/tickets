const Loader = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden transition-all bg-white opacity-75 dark:bg-black">
      <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-100 rounded-full loader"></div>
    </div>
  );
};
export default Loader;
