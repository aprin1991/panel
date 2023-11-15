import UsersBody from "@/app/ui/dashboard/pages/users/UsersBody";
import UsersTop from "@/app/ui/dashboard/pages/users/UsersTop";

const UserPage = () => {
  return (
    <div className="bg-slate-900 p-4 w-full rounded-md">
      <UsersTop />
      <UsersBody />
    </div>
  );
};

export default UserPage;
