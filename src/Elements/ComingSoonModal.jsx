const ComingSoonModal = ({ isOpen, setIsOpen }) => {
  // test comment
  return (
    <div
      className={`inset-0 absolute ${
        isOpen ? "scale-100" : "scale-0"
      } items-center px-4 duration-200 md:px-10 lg:px-12 justify-center flex w-full min-h-screen z-50 bg-white bg-opacity-70`}
    >
      <div
        className={` bg-white rounded-3xl shadow-2xl ${
          isOpen ? "translate-y-0" : "translate-y-10"
        } gap-1 p-8 flex flex-col items-center justify-center text-center text-green-900`}
      >
        <h1 className="text-xl font-bold">Coming Soon</h1>
        <p className="">We are working on it!</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" bg-green-500 text-white mt-2 font-bold hover:bg-red-500 duration-200 delay-300 w-full rounded-lg py-2"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default ComingSoonModal;
