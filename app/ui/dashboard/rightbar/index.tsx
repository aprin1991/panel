import Image from "next/image";

const Rightbar = () => {
  return (
    <div className="">
      <div className="relative p-6 bg-slate-900 flex-grow rounded-md">
        <div className="absolute right-0 bottom-0 opacity-25 z-0">
          <Image src="/astronaut.png" alt="#" width={150} height={220} />
        </div>
        <div className="z-1">
          <span className="text-sm">🔥 Available New</span>
          <h4 className="text-md font-bold my-4">
            How to Use the new Version of the admin dashboard
          </h4>
          <span className="my-4 text-xs inline-block">
            takes only 4 minutes to learn
          </span>

          <p className="text-xs">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <button className="bg-indigo-700 text-sm text-color py-2 px-4 rounded-md mt-5">
            Watch
          </button>
        </div>
      </div>
      <div className="relative p-6 bg-slate-900 flex-grow rounded-md mt-4">
        <div className="z-1">
          <span className="text-sm">🚀 Available New</span>
          <h4 className="text-md font-bold my-4">
            How to Use the new Version of the admin dashboard
          </h4>
          <span className="my-4 text-xs inline-block">
            takes only 4 minutes to learn
          </span>

          <p className="text-xs">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <button className="bg-indigo-700 text-sm text-color py-2 px-4 rounded-md mt-5">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
