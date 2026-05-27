import { X } from "lucide-react";
import { useState } from "react";

type PaymentModeProps = {
  totalPrice: number;
};

const cashValues = [10, 20, 50, 100, 200, 500, 1000, 2000, 5000];

const PaymentMode = ({ totalPrice }: PaymentModeProps) => {
  const [paidPrice, setPaidPrice] = useState(0);

  const returnPrice = paidPrice - totalPrice;

  return (
    <div className="mt-5 space-y-4">
      <div className="flex items-center justify-between rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
        <span className="text-base font-bold text-zinc-950">
          {returnPrice >= 0 ? "K vrácení" : "Chybí"}
        </span>

        <span
          className={`
            rounded-full px-6 py-2 text-lg font-bold
            ${
              returnPrice >= 0
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }
          `}
        >
          {Math.abs(returnPrice)} Kč
        </span>
      </div>
      <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-base font-bold text-zinc-950">Zaplatil</span>

          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-green-500 px-6 py-2 text-lg font-bold text-green-600">
              {paidPrice} Kč
            </div>

            <button
              type="button"
              onClick={() => setPaidPrice(0)}
              className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-red-50 text-red-600 active:scale-95"
            >
              <X className="h-6 w-6" />
              <span className="text-[10px] font-medium">Vynulovat</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {cashValues.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setPaidPrice((current) => current + value)}
              className="rounded-lg border border-zinc-100 bg-white py-5 text-xl font-bold text-zinc-950 shadow-sm active:scale-[0.98]"
            >
              {value} Kč
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
