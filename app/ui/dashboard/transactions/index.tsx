import TransactionCard, { StatusTheme } from "./TransactionCard";

const Transactions = () => {
  return (
    <div className="mt-4 p-4 bg-slate-900 flex-grow rounded-md">
      <h2 className="text-md mb-4">Latest Transactions</h2>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <td className="p-3">Name</td>
            <td className="p-3">Status</td>
            <td className="p-3">Date</td>
            <td className="p-3">Amount</td>
          </tr>
        </thead>
        <tbody>
          <TransactionCard status={StatusTheme.DONE} />
          <TransactionCard status={StatusTheme.CANCELLED} />
          <TransactionCard status={StatusTheme.PENDING} />
          <TransactionCard status={StatusTheme.DONE} />
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
