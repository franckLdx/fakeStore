import React, { FC } from 'react'
import { ProductCartData } from '../../services/cart'
import { useGetProduct } from '../../services'

interface CartProductProps {
  productCartData: ProductCartData
}

export const CartProduct: FC<CartProductProps> = ({ productCartData }) => {
  const productQuery = useGetProduct(productCartData.productId)

  return (<>
    {productQuery.data?.title} - {productCartData.quantity}
  </>)
}