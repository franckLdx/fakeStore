import { useQuery } from "react-query";
import { CategoryData } from "./categories"

export const productUrl = 'https://fakestoreapi.com/products/';

export interface ProductData {
  id: number
  title: string
  description: string
  price: number
  image: string
  rating: {
    rate: number
    count: number
  }
  count: number
  rate: number
}

interface ProductParams {
  limit?: number
}

export const useGetProducts = ({ limit }: ProductParams) => useQuery({
  queryKey: ['products', limit],
  queryFn: async (): Promise<ProductData[]> => {
    const queryParams = limit != undefined ? `?limit=${limit}` : undefined
    const res = await fetch(`${productUrl}${queryParams}`)
    return res.json()
  }
})

export const useGetProduct = (productId: number) => useQuery({
  queryKey: ['products', 'product', productId],
  queryFn: async (): Promise<ProductData> => {
    const res = await fetch(`${productUrl}${productId}`)
    return res.json()
  }
})