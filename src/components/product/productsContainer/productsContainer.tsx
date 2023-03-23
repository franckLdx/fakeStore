import { FC } from "react"
import { UseQueryResult } from "react-query"
import { ProductData } from "../../../services/product"
import { ProductCard } from "../productCard/ProductCard"

import styles from './productsContainer.module.scss'
import { Loader } from "../../loader/Loader"

interface ProductsContainerProps {
  productsQuery: UseQueryResult<ProductData[], unknown>
}

export const ProductsContainer: FC<ProductsContainerProps> = ({ productsQuery }) => (
  <div className={styles.productsContainer}>
    {productsQuery.isLoading && <Loader containerClassName={styles.loaderContainer} />}
    {productsQuery.isSuccess && productsQuery.data.map(product => <ProductCard key={product.id} product={product} />)}
  </div>
)
