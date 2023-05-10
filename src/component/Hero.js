const Hero = () => {
  return (
    <div>
      <div className="px-32 py-28 flex gap-5 my-10 bg-slate-200 h-[44rem]">
        <div className="flex justify-center flex-col">
          <h1 className="text-[56px] font-medium leading-[4rem] mb-14">
            Your Best Value Proposition
          </h1>
          <p className="text-xl font-medium leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="w-48 h-10 text-white bg-black rounded-md">
            Start free trial
          </button>
        </div>
        <div className="shrink-0 block w-[42rem] h-[30rem] border-2 border-black border-solid rounded-md bg-white">
          <div className="flex gap-4 m-3">
            <a
              className="rounded-full w-4 h-4 border-2 border-black border-solid"
              href=""
            ></a>
            <a
              className="rounded-full w-4 h-4 border-2 border-black border-soli"
              href=""
            ></a>
            <a
              className="rounded-full w-4 h-4 border-2 border-black border-solid"
              href=""
            ></a>
          </div>
        </div>
      </div>
      <div className="py-20 px-auto my-10 bg-slate-200 flex flex-col flex-nowrap">
        <div className="flex justify-center flex-col items-center  mx-auto">
          <h1 className="text-[56px] font-medium leading-[4rem] mb-14 mx-auto">
            Your Best Value Proposition
          </h1>
          <p className="text-xl font-medium leading-7 w-2/6 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="w-48 h-10 text-white bg-black rounded-md my-6">
            Start free trial
          </button>
        </div>
        <div className=" shrink-0 mx-auto w-[42rem] h-[30rem] border-2 border-black border-solid rounded-md bg-white">
          <div className="flex gap-4 m-3">
            <a
              className="rounded-full w-4 h-4 border-2 border-black border-solid"
              href=""
            ></a>
            <a
              className="rounded-full w-4 h-4 border-2 border-black border-soli"
              href=""
            ></a>
            <a
              className="rounded-full w-4 h-4 border-2 border-black border-solid"
              href=""
            ></a>
          </div>
        </div>
      </div>
      <div className="my-10 p-auto bg-slate-200 h-[44rem]">
        <div className="flex justify-center flex-col items-center py-48 px-auto">
          <h1 className="text-[56px] font-medium leading-[4rem] mb-14 mx-auto">
            Your Best Value Proposition
          </h1>
          <p className="text-xl font-medium leading-7 w-2/6 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="w-48 h-10 text-white bg-black rounded-md my-6">
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
