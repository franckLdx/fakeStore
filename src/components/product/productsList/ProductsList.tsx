import { FC } from "react"
import { UseQueryResult } from "react-query"
import { ProductData } from "../../../services/product"
import { ProductCard } from "../productCard"
import { Container } from "../../container"

interface ProductsListProps {
  productsQuery: UseQueryResult<ProductData[], unknown>
}

export const ProductsList: FC<ProductsListProps> = ({ productsQuery }) => (
  <Container isLoading={productsQuery.isLoading}>
    {productsQuery.isSuccess && productsQuery.data.map(product => <ProductCard key={product.id} product={product} />)}
  </Container>
)
