import { ChangeEvent, useState } from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const HeaderOperations = () => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="relative flex justify-center items-center gap-2">
      <div className="relative">
        <div className="absolute right-2 top-3 text-white">
          <MdSearch />
        </div>
        <input
          className="w-64 p-2 bg-slate-800 rounded-md text-sky-950 text-sm"
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={handleChangeSearch}
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <MdOutlineChat size={20} />
        <MdNotifications size={20} />
        <MdPublic size={20} />
      </div>
    </div>
  );
};

export default HeaderOperations;
