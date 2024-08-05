import { Ingredient, Product } from "@prisma/client";
import { axiosInstance } from "./axiosInstance";
import { Routes } from "./const";

const productsSearch = async (query: string) => {
  const { data } = await axiosInstance.get<Product[]>(Routes.SEARCH_PRODUCT, {
    params: { query },
  });

  return data;
};

const getAllIngredients = async () => {
  const { data } = await axiosInstance.get<Ingredient[]>(Routes.INGREDIENTS);

  return data;
};

export const services = {
  productsSearch,
  getAllIngredients,
};
