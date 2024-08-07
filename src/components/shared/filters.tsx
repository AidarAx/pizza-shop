"use client";

import { Title } from "./title";
import { FilterCheckbox } from "./filtersCheckbox";
import { Input } from "@/components/ui";
import { RangeSlider } from "@/components/shared/rangeSlider";
import { CheckboxFiltersGroup } from "./checkboxFiltersGroup";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useMemo } from "react";

interface FiltersProps {
  className?: string;
}
export const Filters = ({ className }: FiltersProps) => {
  const { ingredients, onAddId, selectedIds } = useFilterIngredients();

  const ingredientsList = useMemo(
    () =>
      ingredients.map(({ id, name }) => ({
        value: id.toString(),
        text: name,
      })),
    [ingredients]
  );

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox name="ready" text="Можно собирать" value="1" />
        <FilterCheckbox name="new" text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-6">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        items={ingredientsList}
        defaultItems={ingredientsList.slice(0, 5)}
        isLoading={ingredients.length <= 0}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
