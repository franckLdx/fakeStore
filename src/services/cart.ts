import { useQuery } from "@tanstack/react-query"

export interface ProductCartData {
  productId: number,
  quantity: number
}

export interface CartData {
  id: number,
  userId: number,
  date: string,
  products: ProductCartData[]
}

export const useGetCart = () => useQuery({
  queryKey: ['cart'],
  queryFn: async (): Promise<CartData> => {
    const result = await fetch('https://fakestoreapi.com/carts/1')
    return result.json()
  }
})