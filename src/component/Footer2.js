const Footer2 = () => {
  return (
    <div>
      <div className="h-96 p-32 grid grid-cols-3 bg-slate-200 leading-10">
        <div className="col-span-1 text-sm leading-10">
          <h1 className="font-bold">TRADE</h1>
          <p>@ 2010-2020</p>
          <p>Primary - Temps</p>
        </div>
        <div className="col-span-2 grid  grid-cols-4">
          <ul className="col-span-1">
            <span className="font-bold">Product</span>
            <li>Product</li>
            <li>Product</li>
            <li>Product</li>
          </ul>
          <ul className="col-span-1">
            <span className="font-bold">Featured</span>
            <li>Featured</li>
            <li>Featured</li>
            <li>Featured</li>
          </ul>
          <ul className="col-span-1">
            <span className="font-bold">Resouces</span>
            <li>Resouces</li>
            <li>Resouces</li>
            <li>Resouces</li>
          </ul>
          <ul className="col-span-1">
            <span className="font-bold">Product</span>
            <li>Product</li>
            <li>Product</li>
            <li>Product</li>
          </ul>
        </div>
      </div>
      <div className="h-96 px-52 pt-24 bg-slate-200 my-10 flex flex-col items-center">
        <div className="flex gap-10 justify-center mx-auto pb-10 w-full">
          <div className="flex gap-10 w-2/6  justify-end">
            <p>Product</p>
            <p>Featured</p>
            <p>Resouces</p>
          </div>
          <h2 className="font-bold text-xl inline-block align-top mx-12 ">
            TRADE
          </h2>
          <div className="flex gap-10 w-2/6">
            <p>About</p>
            <p>Blog</p>
            <p>Support</p>
          </div>
        </div>
        <hr className="h-1 bg-black"></hr>
        <div className="mb-10">
          <a className="inline-block w-14 h-14 bg-white border-2 border-black border-solid rounded-full m-5"></a>
          <a className="inline-block w-14 h-14 bg-white border-2 border-black border-solid rounded-full m-5"></a>
          <a className="inline-block w-14 h-14 bg-white border-2 border-black border-solid rounded-full m-5"></a>
          <a className="inline-block w-14 h-14 bg-white border-2 border-black border-solid rounded-full m-5"></a>
          <a className="inline-block w-14 h-14 bg-white border-2 border-black border-solid rounded-full m-5"></a>
        </div>
        <div>
          <p>@ 2010 - 2020 Primary Temps</p>
        </div>
      </div>
      <div className="py-8 px-20 grid grid-cols-2 bg-slate-200 leading-10 gap-10">
        <div className="col-span-1 flex justify-end gap-10 p-4 border-2 border-r-black border">
          <div className="font-bold text-xl ">TRADE</div>
          <div className="px-10 ">
            <span className="font-bold">Latest Blog Post</span>
            <h1 className="font-simebold my-6 text-2xl">
              Ready to get started?
            </h1>
            <p className="leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-10 p-4">
            <ul className="">
              <span className="font-bold">Product</span>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
            </ul>
            <ul className="col-span-1">
              <span className="font-bold">Featured</span>
              <li>Featured</li>
              <li>Featured</li>
              <li>Featured</li>
              <li>Featured</li>
              <li>Featured</li>
            </ul>
          </div>
          <p className="block my-10">@ 2010-2020 - Primary - Temps</p>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
