import { ClipboardList, Minus, X } from "lucide-react";

export type Item = {
  name: string;
  fullName: string;
  amount: string;
  price: number;
};

type GroupedItem = Item & {
  count: number;
};

type SelectedItemsListProps = {
  items: Item[];
  onDecreaseItem: (item: Item) => void;
  clearAll: () => void;
};

const groupItems = (items: Item[]): GroupedItem[] => {
  return items.reduce<GroupedItem[]>((groups, item) => {
    const existingGroup = groups.find(
      (group) =>
        group.name === item.name &&
        group.fullName === item.fullName &&
        group.amount === item.amount &&
        group.price === item.price,
    );

    if (existingGroup) {
      existingGroup.count += 1;
    } else {
      groups.push({ ...item, count: 1 });
    }

    return groups;
  }, []);
};

const SelectedItemsList = ({
  items,
  onDecreaseItem,
  clearAll,
}: SelectedItemsListProps) => {
  const groupedItems = groupItems(items);
  const totalCount = items.length;
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mb-4 w-full rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
            <ClipboardList className="h-5 w-5" />
          </div>

          <h3 className="text-lg font-bold text-zinc-950">Vybrané položky</h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-9 min-w-9 items-center justify-center rounded-full bg-green-50 px-3 text-lg font-bold text-green-600">
            {totalCount}
          </div>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={() => clearAll()}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white active:scale-95"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="my-4 h-px w-full bg-zinc-200" />

      {items.length === 0 ? (
        <p className=" text-sm font-medium text-zinc-400">
          Přidej položky výběrem produktu.
        </p>
      ) : (
        <div className="space-y-3">
          {groupedItems.map((item) => (
            <div
              key={`${item.name}-${item.fullName}-${item.amount}-${item.price}`}
              className="flex items-center gap-3"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-green-600">
                      {item.count}×
                    </span>

                    <span className="truncate text-base font-bold text-zinc-950">
                      {item.fullName}
                    </span>
                  </div>

                  <span className="shrink-0 text-base font-bold text-zinc-950">
                    {item.amount}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onDecreaseItem(item)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white active:scale-95"
              >
                <Minus className="h-4 w-4" />
              </button>
            </div>
          ))}

          <p className="text-sm font-medium text-zinc-500">
            Přidej další položky nebo přejdi k platbě.
          </p>
        </div>
      )}

      <div className="my-4 h-px w-full bg-zinc-200" />

      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-zinc-950">Celkem</span>

        <span className="rounded-full bg-green-50 px-4 text-lg font-bold text-green-600">
          {totalPrice} Kč
        </span>
      </div>
    </div>
  );
};

export default SelectedItemsList;
