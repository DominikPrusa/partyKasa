import { BottleWine, Cross, Leaf, ShipWheel } from "lucide-react";

export type Product = {
  category: "panaky" | "pivo" | "drinky" | "jidlo";
  name: string;
  price: number;
  amount: string;
  icon: React.ElementType;
  description?: string;
  primaryColor: string;
  bgColor: string;
};

export const products: Product[] = [
  // panaky / shots
  {
    category: "panaky",
    name: "Jäger",
    price: 40,
    amount: "0,02 l",
    icon: Cross,
    description: "Bylinný likér Jägermeister, malý panák.",
    primaryColor: "text-green-700",
    bgColor: "bg-green-50",
  },
  {
    category: "panaky",
    name: "Jäger",
    price: 70,
    amount: "0,04 l",
    icon: Cross,
    description: "Bylinný likér Jägermeister, velký panák.",
    primaryColor: "text-green-700",
    bgColor: "bg-green-50",
  },
  {
    category: "panaky",
    name: "Vodka",
    price: 40,
    amount: "0,02 l",
    icon: BottleWine,
    description: "Vodka, malý panák.",
    primaryColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    category: "panaky",
    name: "Vodka",
    price: 70,
    amount: "0,04 l",
    icon: BottleWine,
    description: "Vodka, velký panák.",
    primaryColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    category: "panaky",
    name: "Zelená",
    price: 25,
    amount: "0,02 l",
    icon: Leaf,
    description: "Zelená, malý panák.",
    primaryColor: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    category: "panaky",
    name: "Zelená",
    price: 50,
    amount: "0,04 l",
    icon: Leaf,
    description: "Zelená, velký panák.",
    primaryColor: "text-lime-600",
    bgColor: "bg-lime-50",
  },
  {
    category: "panaky",
    name: "Rum",
    price: 40,
    amount: "0,02 l",
    icon: ShipWheel,
    description: "Rum, malý panák.",
    primaryColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    category: "panaky",
    name: "Rum",
    price: 70,
    amount: "0,04 l",
    icon: ShipWheel,
    description: "Rum, velký panák.",
    primaryColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },

  // pivo / beer
  {
    category: "pivo",
    name: "Pivo",
    price: 40,
    amount: "0,3 l",
    icon: ShipWheel,
    primaryColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    category: "pivo",
    name: "Pivo",
    price: 70,
    amount: "0,5 l",
    icon: ShipWheel,
    primaryColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },

  // drinky / drinks
  {
    category: "drinky",
    name: "Cola+Morgen",
    price: 100,
    amount: "0,3 l",
    icon: ShipWheel,
    primaryColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  // jidlo / food
  {
    category: "jidlo",
    name: "Párek v rohlíku",
    price: 40,
    amount: "1ks",
    icon: ShipWheel,
    primaryColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];
