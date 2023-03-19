import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/titles/PageTitle";
import { ProductsContainer } from "../../components/productsContainer/productsContainer";
import { useGetProducts } from "../../services/product";

import styles from './bestSellers.module.scss'

const BestSellers: FC = () => {
  const products = useGetProducts({ limit: 5 })

  return (
    <Page>
      <PageTitle title="Best Sellers" />
      <ProductsContainer products={products} />
    </Page>
  )
}

export default BestSellers