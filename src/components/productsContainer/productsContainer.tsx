import { FC } from "react"
import { UseQueryResult } from "react-query"
import { ProductData } from "../../services/product"
import { ProductCard } from "../productCard/ProductCard"
import { ProductsContainerLoader } from "./productsContainerLoader"

import styles from './productsContainer.module.scss'

interface ProductsContainerProps {
  products: UseQueryResult<ProductData[], unknown>
}

export const ProductsContainer: FC<ProductsContainerProps> = ({ products }) => (
  <div className={styles.productsContainer}>
    {products.isLoading && <ProductsContainerLoader />}
    {products.isSuccess && products.data.map(product => <ProductCard key={product.id} product={product} />)}
  </div>
)
