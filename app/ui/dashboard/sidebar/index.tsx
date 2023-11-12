import Image from "next/image";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./MenuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const Sidebar = () => {
  return (
    <div className="w-1/6 h-screen sticky top-0 bg-slate-900 p-4 rounded-md">
      <figure className="flex justify-start items-center gap-4 mb-4">
        <Image
          className="w-12 h-12 rounded-full"
          src="/noavatar.png"
          alt="avatar"
          width={100}
          height={100}
        />
        <figcaption>
          <h2 className="text-sm mb-0">Hamed Ostovar</h2>
          <span className="text-xs">Administrative</span>
        </figcaption>
      </figure>
      <ul className="flex flex-col gap-3">
        {menuItems.map((menu) => {
          return (
            <li key={menu.title} className="flex flex-col gap-4">
              <span className="">{menu.title}</span>
              <div className="flex flex-col gap-2">
                {menu.list.map((item) => {
                  return <MenuLink key={item.title} item={item} />;
                })}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="w-full">
        <button className="flex justify-start items-center rounded-md gap-4 mt-4 hover:bg-slate-800 w-full p-3">
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};
