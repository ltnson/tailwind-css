const Cta = () => {
  return (
    <div>
      <div className="h-[31rem] py-32 bg-slate-200 flex flex-col justify-between items-center">
        <h2 className="font-bold text-xl">Ready to get started?</h2>
        <p className="w-1/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="w-48 h-14 rounded-md bg-black text-white">
          Start free trial
        </button>
      </div>
      <div className="h-60 py-32 bg-slate-200 flex justify-around items-center my-10">
        <div>
          <h2 className="font-bold mb-4 text-xl">Ready to get started?</h2>
          <p className="text-xl mt-4">Sign up or contact us</p>
        </div>
        <div>
          <button className="w-48 h-12 rounded-md bg-black text-white mr-10">
            Start free trial
          </button>
          <button className="w-48 h-12 rounded-md bg-white ">Contact Us</button>
        </div>
      </div>
      <div className="h-[468px] py-32  bg-slate-200 flex flex-col justify-between items-center my-10">
        <h2 className=" mb-4 text-xl">Try the product for free</h2>
        <div>
          <button className="w-48 h-14 block my-10 rounded-md bg-black text-white">
            Start free trial
          </button>
          <button className="w-48 h-14  rounded-md bg-white ">
            Contact Us
          </button>
        </div>
      </div>
      <div className="p-32 flex flex-col items-center gap-10  bg-slate-200 my-10 text-xl">
        <h1 className="text-2xl mb-10">Try the product out for free.</h1>
        <input
          className="w-[22rem] rounded-md h-12 p-4 "
          placeholder="Email"
        ></input>
        <input
          className="w-[22rem] rounded-md h-12 p-4"
          placeholder="Password"
        ></input>
        <button className="w-[22rem] h-10 bg-black text-white rounded-md">
          Start free trial
        </button>
      </div>
    </div>
  );
};
export default Cta;
