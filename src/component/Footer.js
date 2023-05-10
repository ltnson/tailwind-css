const Footer = () => {
  return (
    <div>
      <div className="py-12 my-10 bg-slate-200 flex flex-col items-center">
        <h1 className="mx-auto text-2xl mb-5 leading-9">
          Trusted by the World’s Best Companies
        </h1>
        <div>
          <a className="inline-block w-20 h-20 bg-black rounded-full m-5"></a>
          <a className="inline-block w-20 h-20 bg-black rounded-full m-5"></a>
          <a className="inline-block w-20 h-20 bg-black rounded-full m-5"></a>
          <a className="inline-block w-20 h-20 bg-black rounded-full m-5"></a>
          <a className="inline-block w-20 h-20 bg-black rounded-full m-5"></a>
          <a className="inline-block w-20 h-20 bg-black rounded-full m-5"></a>
        </div>
      </div>
      <div className="py-12 my-10 bg-slate-200 flex flex-col items-center">
        <h1 className=" text-2xl mb-5 leading-9">The Publication</h1>
        <p className=" w-2/6 mb-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <a className="inline-block w-28 h-10 bg-black m-5"></a>
          <a className="inline-block w-28 h-10 bg-black m-5"></a>
          <a className="inline-block w-28 h-10 bg-black m-5"></a>
          <a className="inline-block w-28 h-10 bg-black m-5"></a>
          <a className="inline-block w-28 h-10 bg-black m-5"></a>
          <a className="inline-block w-28 h-10 bg-black m-5"></a>
        </div>
      </div>
      <div className="h-[25rem] my-10 bg-slate-200 flex flex-col justify-center items-center">
        <p className="text-2xl text-center">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.”
        </p>
        <div className="mx-auto">
          <a className="inline-block w-20 h-20 bg-black rounded-full m-5"></a>
        </div>
        <p className=" text-mb mb-5 leading-9">
          Maria Lopez, VP of Design at Meshery
        </p>
      </div>
    </div>
  );
};
export default Footer;
