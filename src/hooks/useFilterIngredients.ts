import { services } from "@/services/services";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

interface ReturnProps {
  items: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [items, setItems] = useState<Ingredient[]>([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await services.getAllIngredients();

        setItems(ingredients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIngredients();
  }, []);

  return { items };
};
