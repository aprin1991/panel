import Image from "next/image";

export enum StatusTheme {
  DONE = "done",
  CANCELLED = "cancelled",
  PENDING = "pending",
}

const statusStyle: { [key in StatusTheme]: string } = {
  [StatusTheme.DONE]: "bg-green-800",
  [StatusTheme.CANCELLED]: "bg-red-800",
  [StatusTheme.PENDING]: "bg-blue-800",
};

const TransactionCard = ({
  status = StatusTheme.PENDING,
}: {
  status: StatusTheme;
}) => {
  return (
    <tr>
      <td className="p-3">
        <div className="flex justify-start items-center gap-3">
          <Image
            src="/noavatar.png"
            alt="user"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span>John Doe</span>
        </div>
      </td>
      <td className="p-3">
        <span
          className={`${statusStyle[status]} text-white rounded-md px-3 py-1.5 text-xs`}
        >
          {status}
        </span>
      </td>
      <td className="p-3">14.02.2024</td>
      <td className="p-3">1400$</td>
    </tr>
  );
};

export default TransactionCard;
