import { useQuery } from "react-query/";
import { ProductData, productUrl } from "./product";

export type CategoryData = string

export const useGetCaterogies = () => useQuery({
  queryKey: ['categories'],
  queryFn: async (): Promise<CategoryData[]> => {
    const res = await fetch(`${productUrl}categories`)
    return res.json()
  }
})

export const useGetProductsCategory = (category: CategoryData) => useQuery({
  queryKey: ['categories', category],
  queryFn: async (): Promise<ProductData[]> => {
    const res = await fetch(`${productUrl}category/${category}`)
    return res.json()
  }
})