import { fetchUsers } from "@/app/lib/data";
import UsersBody from "@/app/ui/dashboard/pages/users/UsersBody";
import UsersTop from "@/app/ui/dashboard/pages/users/UsersTop";

const UserPage = async ({ searchParams }: { searchParams: { q?: string } }) => {
  const q = searchParams?.q || "";
  const { users } = await fetchUsers(q, 1);
  return (
    <div className="bg-slate-900 p-4 w-full rounded-md">
      <UsersTop />
      <UsersBody users={users} />
    </div>
  );
};

export default UserPage;
