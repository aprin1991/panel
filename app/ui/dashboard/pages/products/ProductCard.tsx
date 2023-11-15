import Image from "next/image";

const ProductCard = () => {
  return (
    <tr>
      <td className="p-3">
        <div className="flex justify-start items-center gap-3">
          <Image
            src="/noproduct.jpg"
            alt="user"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span>Iphone</span>
        </div>
      </td>
      <td className="p-3">
        <p className="max-w-sm">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and
        </p>
      </td>
      <td className="p-3">123$</td>
      <td className="p-3">Oct 30 2023</td>
      <td className="p-3">34</td>
      <td className="p-3">
        <div className="flex justify-start items-center gap-3">
          <button className="p-1 px-3 text-white text-xs bg-green-700 rounded-md">
            View
          </button>
          <button className="p-1 px-3 text-white text-xs bg-red-700 rounded-md">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductCard;
