import { services } from "@/services/services";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await services.getAllIngredients();

        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, onAddId: toggle, selectedIds };
};
