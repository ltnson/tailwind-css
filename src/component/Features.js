const Features = () => {
  return (
    <div>
      <div className="grid grid-cols-2 bg-slate-200 h-[38rem]">
        <div className="w-4/6 m-auto mr-10">
          <h2 className="font-bold mb-4 leading-9">Feature that is amazing</h2>
          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-disc leading-10">
            <li>Benefit of Feature</li>
            <li>Benefit of Feature</li>
            <li>Benefit of Feature</li>
          </ul>
        </div>
        <div className="pr-32 py-32">
          <div className="bg-white border-solid border-2 border-black rounded-md w-full h-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-slate-200 h-[38rem] my-10">
        <div className="w-2/4 m-auto">
          <h2 className="font-bold mb-4 leading-9">Feature that is amazing</h2>
          <p className="my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="w-48 h-14 border-2 border-solid rounded-md bg-white text-center border-black">
            Learn More
          </button>
        </div>
        <div className="bg-black px-52 py-32">
          <div className="bg-white rounded-md w-full h-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-slate-200 h-[38rem] my-10">
        <div className="py-32 pl-20 ">
          <h1 className="text-[32px]  leading-[38px] mb-4">
            Your Best Value Proposition
          </h1>
          <p className="text-xl font-medium mb-20 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-neutral-500 my-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="inline-block w-6 h-6 align-bottom rounded-full bg-black mr-2"></a>
          <p className="align-middle inline-block">
            Dhaka Oke, Product Designer
          </p>
        </div>
        <div className="pr-20 py-32 relative">
          <div className="absolute left-0 bottom-32 z-10 bg-black rounded-md w-3/4 h-2/4"></div>
          <div className="absolute left-32 top-28 bg-white rounded-md w-3/4 h-2/4 mb-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
