import { IUser } from "@/app/lib/types";
import UserCard from "./UserCard";
import { FC } from "react";
type Props = {
  users: IUser[];
};

const UsersBody: FC<Props> = ({ users }) => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-3">Name</td>
            <td className="p-3">Emil</td>
            <td className="p-3">Created at</td>
            <td className="p-3">Role</td>
            <td className="p-3">Action</td>
            <td className="p-3"></td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersBody;
