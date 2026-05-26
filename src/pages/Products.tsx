import { useSearchParams } from "react-router-dom";
import { products } from "../utils/productList";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold">{category}</h1>

        <div className="flex flex-col gap-3 text-center">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="rounded-xl bg-white px-4 py-3 text-xl font-semibold shadow-sm"
            >
              {product.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
