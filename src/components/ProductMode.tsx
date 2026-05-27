import type { Product } from "../utils/productList";

// the products should be filtered for the correct category
const ProductMode = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex flex-col gap-3 text-center">
      {products.map((product, index) => (
        <div
          key={index}
          className="rounded-xl bg-white px-4 py-3 text-xl font-semibold shadow-sm"
        >
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductMode;
