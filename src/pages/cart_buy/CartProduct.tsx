import React, { FC } from 'react'
import { ProductCartData } from '../../services/cart'
import { useGetProduct } from '../../services'
import { Card } from '../../components/card'

import styles from './cardProduct.module.scss'
import { useNavigateToProduct } from '../product/routeHelper'

interface CartProductProps {
  productCart: ProductCartData
}

export const CartProduct: FC<CartProductProps> = ({ productCart }) => {
  const productQuery = useGetProduct(productCart.productId)
  const navigateToProduct = useNavigateToProduct(productCart.productId)

  if (productQuery.isSuccess) {
    return <Card onClick={navigateToProduct}>
      <h1 className={styles.title}>{productQuery.data.title}</h1>
      <h3 className={styles.price}>{productCart.quantity * productQuery.data.price} € ( {productCart.quantity} * {productQuery.data.price} )</h3>
      <h3 className={styles.price}>{productQuery.data.rating.rate} ({productQuery.data.rating.count} opinions)</h3>
      <img className={styles.image} src={productQuery.data.image} alt={`Photo of ${productQuery.data.title}`} />
    </Card>
  }
  return (<></>)
}