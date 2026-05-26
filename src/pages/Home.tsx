import { Link } from "react-router-dom";
import { Beer, Martini, CupSoda, Utensils } from "lucide-react";

const categories = [
  {
    label: "Pivo",
    param: "pivo",
    icon: Beer,
    color: "text-amber-500",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
  {
    label: "Panáky",
    param: "panaky",
    icon: CupSoda,
    color: "text-green-500",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    label: "Drinky",
    param: "drinky",
    icon: Martini,
    color: "text-red-400",
    bg: "bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    label: "Jídlo",
    param: "jidlo",
    icon: Utensils,
    color: "text-orange-500",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-md flex-col p-7">
        <section className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-950">
            PartyKasa
          </h1>

          <p className="mt-4 text-lg font-medium tracking-[0.16em] text-zinc-500">
            Vyber kategorii produktů
          </p>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.param}
                to={`/products?category=${category.param}`}
                className={[
                  "flex aspect-[1.05] flex-col items-center justify-center rounded-xl p-4",
                  "shadow-md",
                  category.bg,
                ].join(" ")}
              >
                <div
                  className={[
                    "mb-6 flex h-24 w-24 items-center justify-center rounded-full",
                    category.iconBg,
                  ].join(" ")}
                >
                  <Icon
                    className={["h-12 w-12 stroke-[1.8]", category.color].join(
                      " ",
                    )}
                  />
                </div>

                <span className="text-2xl font-bold tracking-tight text-slate-950">
                  {category.label}
                </span>
              </Link>
            );
          })}
        </section>

        <footer className="mt-auto flex flex-col items-center text-center">
          <img
            src="./logo_black.jpg"
            alt="pionyr_luka_nad_jihlavou"
            className="w-36"
          />
        </footer>
      </div>
    </main>
  );
};

export default Home;
