"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { MdSearch } from "react-icons/md";

const UsersTop = () => {
  const [search, setSearch] = useState("");
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex justify-between items-center mb-5">
      <div className="relative">
        <div className="absolute right-2 top-3 text-white">
          <MdSearch />
        </div>
        <input
          className="w-64 p-2 bg-slate-800 rounded-md text-sky-950 text-sm text-white"
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={handleChangeSearch}
        />
      </div>
      <Link
        href="/dashboard/users/add"
        className="bg-indigo-700 text-sm text-color py-2 px-4 rounded-md"
      >
        Add New
      </Link>
    </div>
  );
};

export default UsersTop;
