import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex justify-start items-start gap-2 p-4 bg-slate-900 flex-grow rounded-md hover:bg-slate-800">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col p-1 text-sm gap-4">
        <span>Total Users:</span>
        <span>10,273</span>
        <span className="text-xs">
          <span className="text-green-600 mr-1">12%</span>more that previous
          week
        </span>
      </div>
    </div>
  );
};

export default Card;
