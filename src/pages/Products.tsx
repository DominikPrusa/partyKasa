import { Link, useSearchParams } from "react-router-dom";
import { products } from "../utils/productList";
import { ArrowLeft, Banknote, Check, Undo2 } from "lucide-react";
import { categoryMapper } from "../utils/categoryNameMap";
import { useState } from "react";
import ProductMode from "../components/ProductMode";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  const [mode, setMode] = useState<"products" | "payment">("products");

  return (
    <main className="min-h-screen bg-zinc-50 px-6 text-zinc-950">
      <div className="mx-auto max-w-md">
        <div className="relative flex items-center py-3">
          {/* TODO add confirmation to leave the page */}
          <Link to="/" className="absolute -left-1">
            <ArrowLeft className="h-8 w-8" />
          </Link>

          <h1 className="w-full text-center text-xl font-bold">PartyKasa</h1>
        </div>

        <h2 className="mb-2 text-md font-semibold text-zinc-500">
          {categoryMapper(category)}
        </h2>

        {/* TODO component with list of all items */}
        <div className="flex w-full flex-row gap-2">
          <button
            className="flex flex-1 items-center justify-center gap-4 rounded-lg bg-red-500 py-3 text-white shadow-sm"
            // TODO back action
            onClick={() =>
              mode === "products" ? console.log("back") : setMode("products")
            }
          >
            <Undo2 className="h-6 w-6" />
            <span className="text-lg font-semibold">
              {mode === "products" ? "Krok zpět" : "Produkty"}
            </span>
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-4 rounded-lg bg-green-600 py-3 text-white shadow-sm"
            // TODO finish actions
            onClick={() =>
              mode === "products" ? setMode("payment") : console.log("finish")
            }
          >
            {mode === "products" ? (
              <Banknote className="h-6 w-6" />
            ) : (
              <Check className="h-6 w-6" />
            )}
            <span className="text-lg font-semibold">
              {mode === "products" ? "Placení" : "Dokončit"}
            </span>
          </button>
        </div>

        {mode === "products" ? (
          <ProductMode products={filteredProducts} />
        ) : (
          <div>payment</div>
        )}
      </div>
    </main>
  );
};

export default Products;
