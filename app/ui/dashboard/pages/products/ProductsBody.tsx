import ProductCard from "./ProductCard";

const ProductsBody = () => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-3">Title</td>
            <td className="p-3">Description</td>
            <td className="p-3">Price</td>
            <td className="p-3">Created at</td>
            <td className="p-3">Stocks</td>
            <td className="p-3">Actions</td>
          </tr>
        </thead>
        <tbody>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </tbody>
      </table>
    </div>
  );
};

export default ProductsBody;
