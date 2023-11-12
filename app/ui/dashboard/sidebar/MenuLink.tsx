"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  item: {
    title: string;
    path: string;
    icon: ReactNode;
  };
};

const MenuLink = ({ item }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex justify-start items-center gap-2 p-3 rounded-md hover:bg-slate-800 transition ${
        pathName === item.path ? "bg-slate-800" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
