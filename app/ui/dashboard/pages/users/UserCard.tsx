import Image from "next/image";

const UserCard = () => {
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
      <td className="p-3">{"hello@gmail.com"}</td>
      <td className="p-3">Oct 30 2023</td>
      <td className="p-3">Client</td>
      <td className="p-3">Passive</td>
      <td className="p-3">
        <div className="flex justify-center items-center gap-3">
          <button className="p-1 px-3 text-white text-xs bg-green-700 rounded-md">
            View
          </button>
          <button className="p-1 px-3 text-white text-xs bg-red-700 rounded-md">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserCard;
