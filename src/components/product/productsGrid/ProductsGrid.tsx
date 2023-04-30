import { FC } from "react"
import { ProductData } from "../../../services/product"
import { ProductGridCard } from "../productGridCard"
import { UseQueryResult } from "@tanstack/react-query/build/lib/types"
import { Container } from "../../container"

interface ProductsGridProps {
  productsQuery: UseQueryResult<ProductData[], unknown>
}

export const ProductsGrid: FC<ProductsGridProps> = ({ productsQuery }) => (
  <Container variant="row" isLoading={productsQuery.isLoading}>
    {productsQuery.isSuccess && productsQuery.data.map(product => <ProductGridCard key={product.id} product={product} />)}
  </Container>
)
