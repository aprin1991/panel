import { IUser } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
type TPRops = {
  user: IUser;
};
const UserCard: FC<TPRops> = ({ user }) => {
  return (
    <tr>
      <td className="p-3">
        <div className="flex justify-start items-center gap-3">
          <Image
            src={user.img ?? ""}
            alt="user"
            width={30}
            height={30}
            className="rounded-full object-cover w-10 h-10"
          />
          <span>{user.username}</span>
        </div>
      </td>
      <td className="p-3">{user.email}</td>
      <td className="p-3">{user.createdAt?.toString().slice(4, 16)}</td>
      <td className="p-3">{user.isAdmin ? "Admin" : "Client"}</td>
      <td className="p-3">{user.isActive ? "Passive" : "inActive"}</td>
      <td className="p-3">
        <div className="flex justify-center items-center gap-3">
          <Link
            href={`/dashboard/users/${user.id}`}
            className="p-1 px-3 text-white text-xs bg-green-700 rounded-md"
          >
            View
          </Link>
          <button className="p-1 px-3 text-white text-xs bg-red-700 rounded-md">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserCard;
