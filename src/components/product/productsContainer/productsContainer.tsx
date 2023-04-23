import { FC } from "react"
import { UseQueryResult } from "react-query"
import { ProductData } from "../../../services/product"
import { ProductCard } from "../productCard"
import { Loader } from "../../loader"

import styles from './productsContainer.module.scss'

interface ProductsContainerProps {
  productsQuery: UseQueryResult<ProductData[], unknown>
}

export const ProductsContainer: FC<ProductsContainerProps> = ({ productsQuery }) => (
  <div className={styles.productsContainer}>
    {productsQuery.isLoading && <Loader containerClassName={styles.loaderContainer} />}
    {productsQuery.isSuccess && productsQuery.data.map(product => <ProductCard key={product.id} product={product} />)}
  </div>
)
