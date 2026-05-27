import { Link, useSearchParams } from "react-router-dom";
import { products, type Product } from "../utils/productList";
import { ArrowLeft, Banknote, Check, Undo2 } from "lucide-react";
import { categoryMapper } from "../utils/categoryNameMap";
import { useState } from "react";
import ProductMode from "../components/ProductMode";
import type { Item } from "../components/SelectedItemList";
import SelectedItemsList from "../components/SelectedItemList";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  const [mode, setMode] = useState<"products" | "payment">("products");
  const [itemList, setItemList] = useState<Item[]>([]);

  const handleProductClick = (product: Product) => {
    const newItem: Item = {
      name: product.name,
      fullName: product.fullName,
      amount: product.amount,
      price: product.price,
    };

    setItemList((currentItems) => [...currentItems, newItem]);
  };

  const handleDecreaseItem = (itemToDecrease: Item) => {
    setItemList((currentItems) => {
      const indexToRemove = currentItems.findIndex(
        (item) =>
          item.name === itemToDecrease.name &&
          item.amount === itemToDecrease.amount &&
          item.price === itemToDecrease.price,
      );

      if (indexToRemove === -1) return currentItems;

      return currentItems.filter((_, index) => index !== indexToRemove);
    });
  };

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

        <SelectedItemsList
          items={itemList}
          onDecreaseItem={handleDecreaseItem}
          clearAll={() => setItemList([])}
        />
        <div className="flex w-full flex-row gap-2">
          <button
            className="flex flex-1 items-center justify-center gap-4 rounded-lg bg-red-500 py-3 text-white shadow-sm"
            onClick={() =>
              mode === "products"
                ? setItemList((currentItems) => currentItems.slice(0, -1))
                : setMode("products")
            }
          >
            <Undo2 className="h-6 w-6" />
            <span className="text-lg font-semibold">
              {mode === "products" ? "Krok zpět" : "Produkty"}
            </span>
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-4 rounded-lg bg-green-600 py-3 text-white shadow-sm"
            onClick={() => {
              if (mode === "products") {
                setMode("payment");
              } else {
                setItemList([]);
                setMode("products");
              }
            }}
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
          <ProductMode
            products={filteredProducts}
            onProductClick={handleProductClick}
          />
        ) : (
          <div>payment</div>
        )}
      </div>
    </main>
  );
};

export default Products;
