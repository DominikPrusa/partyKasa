import { useEffect, useRef } from "react";
import type { Product } from "../utils/productList";

type ProductCardProps = {
  product: Product;
  onClick?: (product: Product) => void;
};

const getNameTextSize = (name: string) => {
  if (name.length > 20) return "text-base";
  if (name.length > 16) return "text-md";
  if (name.length > 12) return "text-lg";
  if (name.length > 8) return "text-xl";
  if (name.length > 6) return "text-2xl";
  return "text-3xl";
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const Icon = product.icon;

  const audioContextRef = useRef<AudioContext | null>(null);
  const clickBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const AudioContextClass =
      window.AudioContext || (window as any).webkitAudioContext;

    const audioContext = new AudioContextClass();
    audioContextRef.current = audioContext;

    fetch("/sounds/click.mp3")
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        clickBufferRef.current = audioBuffer;
      })
      .catch(() => {});

    return () => {
      audioContext.close();
    };
  }, []);

  const playClickSound = () => {
    const audioContext = audioContextRef.current;
    const clickBuffer = clickBufferRef.current;

    if (!audioContext || !clickBuffer) return;

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();

    gain.gain.value = 0.35;

    source.buffer = clickBuffer;
    source.connect(gain);
    gain.connect(audioContext.destination);

    source.start(0);
  };

  return (
    <button
      type="button"
      onClick={() => {
        playClickSound();
        onClick?.(product);
      }}
      className={`
        relative flex min-h-34 flex-col items-center justify-center rounded-lg
        border border-t-6 ${product.borderColor} ${product.bgColor}
        p-1 text-center shadow-sm transition active:scale-[0.95]
      `}
    >
      <div
        className={`
          absolute left-1 top-1 flex h-11 w-11 items-center justify-center
          rounded-full border overflow-hidden ${product.bgColor} ${product.borderColor}
        `}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-10 w-10 object-cover"
          />
        ) : Icon ? (
          <Icon className={`h-8 w-8 ${product.primaryColor}`} />
        ) : null}
      </div>

      <div className="flex w-full min-w-0 flex-col items-center justify-center">
        <span
          className={`text-lg font-medium ${product.primaryColor === "text-white" ? "text-zinc-300" : "text-zinc-500"} mt-1`}
        >
          {product.amount}
        </span>

        <h2
          className={`
            mt-2 max-w-full text-center
            font-bold leading-tight ${product.primaryColor}
            ${getNameTextSize(product.name)}
          `}
        >
          {product.name}
        </h2>

        <div className="mt-2 h-px w-20 bg-zinc-300" />

        <p className={`mt-2 text-xl font-bold ${product.primaryColor}`}>
          {product.price} Kč
        </p>
      </div>
    </button>
  );
};

export default ProductCard;
