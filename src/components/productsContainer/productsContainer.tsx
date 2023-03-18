import { FC } from "react"
import { UseQueryResult } from "react-query"
import { ProductData } from "../../services/product"
import { Loader } from "../loader/Loader"
import { ProductCard } from "../productCard/ProductCard"

import styles from './productsContainer.module.scss'
import { ProductsContainerLoader } from "./productsContainerLoader"

interface ProductsContainerProps {
  products: UseQueryResult<ProductData[], unknown>
}

export const ProductsContainer: FC<ProductsContainerProps> = ({ products }) => {
  return (
    <div className={styles.productsContainer}>
      {products.isLoading && <ProductsContainerLoader />}
      {products.isSuccess && products.data.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}