import React from "react";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard = (props: ProductCardProps) => {
  const { id, name, price, imageUrl, className } = props;

  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} className="mb-1 mt-3 font-bold" size="sm" />

        <p className="text-sm text-gray-400">
          Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы
          из говядины, томаты, сладкий перец, красный лук, моцарелла, фирменный
          томатный соус
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} $</b>
          </span>

          <Button variant="secondary">
            <Plus className="w-5 h-5 mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
