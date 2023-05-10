const Navbar = () => {
  return (
    <div className="grid grid-flow-row gap-5 bg-slate-200">
      <div className="flex justify-between p-2 px-10 bg-white">
        <h2 className="font-bold self-center text-2xl">TRADE</h2>
        <div className="flex gap-5 self-center">
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
          <a href="">Link 4</a>
        </div>
        <div>
          <button className="border-black rounded-md  border-solid  border-2 h-10 w-36">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex justify-between p-3 px-10 bg-white">
        <h2 className="font-bold self-center text-2xl">TRADE</h2>
        <div className="flex gap-5">
          <div className="flex gap-5 self-center justify-self-end">
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a>
          </div>
          <div>
            <button className="border-black rounded-md  border-solid  border-2 h-10 w-36">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between p-3 px-10 bg-white">
        <div className="flex gap-5">
          <h2 className="font-bold self-center text-2xl">TRADE</h2>
          <div className="flex gap-5 self-center justify-self-start">
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
            <a href="">Link 4</a>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-5 self-center">
            <a href="">API</a>
            <a href="">Help</a>
            <a href="">Login</a>
          </div>
          <div className="justify-self-end">
            <button className="bg-black rounded-md  text-white   h-10 w-36">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between p-3 px-10 bg-white">
        <div className="flex gap-5 self-center ">
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
          <a href="">Link 4</a>
        </div>
        <h2 className="font-bold self-center text-2xl justify-self-center">
          TRADE
        </h2>
        <div className="justify-self-end">
          <button className="bg-black rounded-md  text-white text-xs  h-10 w-36">
            Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
