import { ReactNode } from "react";

import Navbar from "../ui/dashboard/navbar";
import { Sidebar } from "../ui/dashboard/sidebar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" min-h-screen flex-grow flex flex-col py-5 p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
