"use client";
import { ChangeEvent, useState } from "react";

const AddUserPage = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    isActive: false,
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    if (name === "isActive" || name === "isAdmin") {
      setForm((prev) => ({
        ...prev,
        [name]: e.target.value === "true",
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };
  return (
    <div className="bg-slate-900 p-4 w-full rounded-md">
      <div className="">
        <div className="flex justify-start items-center gap-6 mb-6">
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.userName}
              placeholder="UserName..."
              name="userName"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.email}
              placeholder="Email..."
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 mb-6">
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.password}
              placeholder="Password..."
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.phone}
              placeholder="Phone..."
              name="phone"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 mb-6">
          <div className="w-1/2">
            <select
              onChange={handleChange}
              name="isAdmin"
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
            >
              <option className="text-black" value="false">
                IsAdmin?
              </option>
              <option className="text-black" value="true">
                Yes
              </option>
              <option className="text-black" value="false">
                No
              </option>
            </select>
          </div>
          <div className="w-1/2">
            <select
              onChange={handleChange}
              name="isAdmin"
              placeholder="isAdmin?"
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
            >
              <option className="text-black" value="false">
                IsActive?
              </option>
              <option className="text-black" value="true">
                Yes
              </option>
              <option className="text-black" value="false">
                No
              </option>
            </select>
          </div>
        </div>
        <div className="w-full mb-6">
          <textarea
            className="w-full h-48 bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
            value={form.address}
            onChange={handleChange}
            name="address"
            placeholder="Address..."
          ></textarea>
        </div>
        <button className="w-full p-5 text-white bg-cyan-600">Submit</button>
      </div>
    </div>
  );
};

export default AddUserPage;
