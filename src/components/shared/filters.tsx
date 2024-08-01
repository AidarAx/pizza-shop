import {Title} from "./title";
import {FilterCheckbox} from "./filtersCheckbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/rangeSlider";
import {CheckboxFiltersGroup} from "./checkboxFiltersGroup";

interface FiltersProps {
  className?: string;
}
export const Filters = ({className}: FiltersProps) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1"/>
        <FilterCheckbox text="Новинки" value="2"/>
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-6">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
          <Input type="number" placeholder="1000" min={100} max={1000}/>
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        items={[
          {
            text: "рыба",
            value: "1"
          },
          {
            text: "рыба",
            value: "2"
          },
          {
            text: "рыба",
            value: "3"
          },
          {
            text: "рыба",
            value: "4"
          },
          {
            text: "рыба",
            value: "5"
          },
          {
            text: "рыба",
            value: "6"
          },
          {
            text: "рыба",
            value: "7"
          },
          {
            text: "рыба",
            value: "8"
          },
          {
            text: "рыба",
            value: "9"
          },
        ]}

        defaultItems={[
          {
            text: "рыба",
            value: "1"
          },
          {
            text: "рыба",
            value: "2"
          },
          {
            text: "рыба",
            value: "3"
          },
          {
            text: "рыба",
            value: "4"
          },
          {
            text: "рыба",
            value: "5"
          },
          {
            text: "рыба",
            value: "6"
          },
        ]}
      />
    </div>
  );
};
