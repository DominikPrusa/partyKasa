import type { Product } from "../utils/productList";
import ProductCard from "./ProductCard";

type ProductModeProps = {
  products: Product[];
  onProductClick?: (product: Product) => void;
};

// the products should be filtered for the correct category
const ProductMode = ({ products, onProductClick }: ProductModeProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 my-4">
      {products.map((product, index) => (
        <ProductCard
          key={`${product.name}-${product.amount}-${index}`}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};

export default ProductMode;
