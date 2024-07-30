import { cn } from "@/lib/utils";
import {Button} from "@/components/ui";


interface CategoriesProps {
  className?: string
}

const categoriesList = ["Пицца", "Пицца", "Пицца", "Пицца", "Пицца", "Пицца", "Пицца", "Пицца"];
let activeIndex = 0;

export const Categories = ({className}: CategoriesProps) => {

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        categoriesList.map((item, index) => (
          <a key={index}
             className={cn(
               "flex items-center font-bold h-11 rounded-2xl px-5",
               activeIndex === index && "bg-white shadow-md shadow-gray-200 text-primary"
             )}
          >
            <button>{item}</button>
          </a>
        ))
      }
    </div>
  );
};
