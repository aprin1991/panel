import ProductsBody from "@/app/ui/dashboard/pages/products/ProductsBody";
import ProductsTop from "@/app/ui/dashboard/pages/products/ProductsTop";

const ProductsPage = () => {
  return (
    <div className="bg-slate-900 p-4 w-full rounded-md">
      <ProductsTop />
      <ProductsBody />
    </div>
  );
};

export default ProductsPage;
