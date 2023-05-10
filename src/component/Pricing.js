const Pricing = () => {
  return (
    <div className="px-32 py-14 flex flex-col items-center gap-8">
      <h1 className="">Transparent Pricing</h1>
      <p>
        “If you don’t try this app, you won’t become the superhero you were
        meant to be”
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="w-full p-7 bg-white flex flex-col gap-2 items-center border-black border-solid border-2">
          <div className="w-14 h-14 rounded-full bg-black"></div>
          <h2 className="text-xl font-bold">Title</h2>
          <div>
            <p className="text-sm">Subtitle</p>
          </div>
          <ul className="flex flex-col text-gray-400 gap-2 my-2">
            <li>
              <a href="">Featured 1</a>
            </li>
            <li>
              <a href="">Featured 1</a>
            </li>
            <li>
              <a href="">Featured 1</a>
            </li>
          </ul>
          <div className="mt-20 mb-2">
            <button className="h-10 w-48 border-black rounded-md  border-solid  border-2">
              Start Now
            </button>
          </div>
        </div>
        <div className="w-full p-7 bg-white flex flex-col gap-2 items-center border-black border-solid border-2">
          <div className="w-14 h-14 rounded-full bg-black"></div>
          <h2 className="text-xl font-bold">Title</h2>
          <div>
            <p className="text-sm">Subtitle</p>
          </div>
          <ul className="flex flex-col text-gray-400 gap-2 my-2">
            <li>
              <a href="">Featured 1</a>
            </li>
            <li>
              <a href="">Featured 1</a>
            </li>
            <li>
              <a href="">Featured 1</a>
            </li>
          </ul>
          <div className="mt-20 mb-2">
            <button className="h-10 w-48 border-black rounded-md  border-solid  border-2">
              Start Now
            </button>
          </div>
        </div>
        <div className="w-full p-7 bg-white flex flex-col gap-2 items-center border-black border-solid border-2">
          <div className="w-14 h-14 rounded-full bg-black"></div>
          <h2 className="text-xl font-bold">Title</h2>
          <div>
            <p className="text-sm">Subtitle</p>
          </div>
          <ul className="flex flex-col text-gray-400 gap-2 my-2">
            <li>
              <a href="">Featured 1</a>
            </li>
            <li>
              <a href="">Featured 1</a>
            </li>
            <li>
              <a href="">Featured 1</a>
            </li>
          </ul>
          <div className="mt-20 mb-2">
            <button className="h-10 w-48 border-black rounded-md  border-solid  border-2">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
