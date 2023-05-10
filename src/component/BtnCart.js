const BtnCart = () => {
  return (
    <div className=" p-14 bg-slate-200">
      <div className="flex my-10">
        <div className="mr-6">
          <button className="w-48 h-14 bg-black text-white rounded-md ">
            See more
          </button>
        </div>
        <div>
          <button className="w-48 h-14 border-black rounded-md  border-solid  border-2 ">
            See more
          </button>
        </div>
      </div>
      <div className="flex  gap-14">
        <div>
          <div className="w-72 h-72 bg-black flex">
            <div className="bg-white w-16 h-16 rounded-xl m-auto"></div>
          </div>
          <div className="w-72 h-40 p-6 bg-white flex flex-col justify-between">
            <h2 className="text-2xl">Special Feature</h2>
            <a hred="#">See more </a>
          </div>
        </div>
        <div>
          <div className="w-72 p-7 bg-white flex flex-col gap-2 items-center border-black border-solid border-2">
            <div className="w-14 h-14 rounded-full bg-black"></div>
            <h2 className="text-xl font-bold">Title</h2>
            <div>
              <p className="text-sm">Subtitle</p>
            </div>
            <div className="flex flex-col text-gray-400 gap-2 my-2">
              <a href="">Featured 1</a>
              <a href="">Featured 1</a>
              <a href="">Featured 1</a>
            </div>
            <div className="mt-20 mb-2">
              <button className="h-10 w-48 border-black rounded-md  border-solid  border-2">
                Start Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96 h-96 block bg-black"></div>
          <div className="py-4">
            <p className="text-base mb-3 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Learn More
            </p>
            <a href="" className="text-sm">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnCart;
