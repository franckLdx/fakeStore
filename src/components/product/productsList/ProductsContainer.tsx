import { FC } from "react"
import { UseQueryResult } from "react-query"
import { ProductData } from "../../../services/product"
import { ProductCard } from "../productCard"
import { Loader } from "../../loader"
import { ProductsContainer } from "../productsContainer"

import styles from './productsContainer.module.scss'

interface ProductsListProps {
  productsQuery: UseQueryResult<ProductData[], unknown>
}

export const ProductsList: FC<ProductsListProps> = ({ productsQuery }) => (
  <ProductsContainer>
    {productsQuery.isLoading && <Loader containerClassName={styles.loaderContainer} />}
    {productsQuery.isSuccess && productsQuery.data.map(product => <ProductCard key={product.id} product={product} />)}
  </ProductsContainer>
)
