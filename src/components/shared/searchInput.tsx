"use client";

import { cn } from "@/lib/utils";
import { services } from "@/services/services";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import { products } from "../../../prisma/const";

interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useDebounce(
    async () => {
      try {
        const response = await services.productsSearch(searchQuery);

        setSearchProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    300,
    [searchQuery]
  );

  useClickAway(ref, () => {
    if (focused) {
      setFocused(false);
    }
  });

  const onFocus = () => {
    setFocused(true);
  };

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const onClickProduct = () => {
    setFocused(false);
    setSearchQuery("");
    setSearchProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}

      <div
        ref={ref}
        className="flex rounded-2xl flex-1 justify-between relative h-11 z-30"
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          type="text"
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          placeholder="Найти пиццу..."
          onFocus={onFocus}
          value={searchQuery}
          onChange={onChange}
        />

        {searchProducts.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {searchProducts.map((product) => (
              <Link
                key={product.id}
                onClick={onClickProduct}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                href={`/product/${product.id}`}
              >
                <img
                  className="rounded-sm w-8 h-8"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
