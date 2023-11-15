import UserCard from "./UserCard";

const UsersBody = () => {
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
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </tbody>
      </table>
    </div>
  );
};

export default UsersBody;
