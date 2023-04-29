import React, { FC } from 'react'
import { ProductCartData } from '../../services/cart'
import { useGetProduct } from '../../services'
import { ProductCard } from '../../components'

interface CartProductProps {
  productCartData: ProductCartData
}

export const CartProduct: FC<CartProductProps> = ({ productCartData }) => {
  const productQuery = useGetProduct(productCartData.productId)

  if (productQuery.isSuccess) {
    return <ProductCard product={productQuery.data} />
  }
  return (<></>)
}