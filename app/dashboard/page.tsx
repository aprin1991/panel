import Card from "../ui/dashboard/card";
import Chart from "../ui/dashboard/chart";
import Rightbar from "../ui/dashboard/rightbar";
import Transactions from "../ui/dashboard/transactions";

const DashbparPage = () => {
  return (
    <div>
      <div className="flex gap-5 justify-start items-start">
        <div className="flex-grow">
          <div className="flex-grow flex justify-between items-center gap-5">
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className="w-1/4 sticky top-0">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default DashbparPage;
