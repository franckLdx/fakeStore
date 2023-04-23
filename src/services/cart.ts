import { useQuery } from "react-query";

interface ProductCart {
  productId: number,
  quantity: number
}

interface CartData {
  id: number,
  userId: number,
  date: string,
  products: ProductCart[]
}

export const useGetCart = () => useQuery({
  queryKey: ['cart'],
  queryFn: async (): Promise<CartData> => {
    const result = await fetch('https://fakestoreapi.com/carts/1')
    return result.json()
  }
})