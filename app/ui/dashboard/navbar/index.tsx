"use client";
import { usePathname } from "next/navigation";
import HeaderOperations from "./HeaderOperations";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="bg-slate-900 p-4 w-full rounded-md flex justify-between items-center mb-4">
      <h1 className="font-bold text-lg">{path.split("/").pop()}</h1>
      <HeaderOperations />
    </div>
  );
};

export default Navbar;
