"use client";
import { ChangeEvent, useState } from "react";

const AddProductPage = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    color: "",
    size: "",
    desc: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;

    setForm((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };
  return (
    <div className="bg-slate-900 p-4 w-full rounded-md">
      <div className="">
        <div className="flex justify-start items-center gap-6 mb-6">
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.title}
              placeholder="Title..."
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <select
              onChange={handleChange}
              name="category"
              placeholder="Category"
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
            >
              <option className="text-black" value="Category1">
                Category1
              </option>
              <option className="text-black" value="Category2">
                Category2
              </option>
              <option className="text-black" value="Category3">
                Category3
              </option>
              <option className="text-black" value="Category4">
                Category4
              </option>
            </select>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 mb-6">
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.price}
              placeholder="Price..."
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.stock}
              placeholder="Stock..."
              name="stock"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 mb-6">
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.color}
              placeholder="Color..."
              name="color"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <input
              className="bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
              type="text"
              value={form.size}
              placeholder="Size..."
              name="size"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full mb-6">
          <textarea
            className="w-full h-48 bg-transparent border border-gray-100 rounded-md p-4 w-full text-white"
            value={form.desc}
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

export default AddProductPage;
