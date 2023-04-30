import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { useGetProducts } from "../../services/product";
import { ProductsGrid } from "../../components/product/productsGrid";

const BestSellers: FC = () => {
  const products = useGetProducts({ limit: 5 })

  return (
    <Page>
      <PageTitle title="Best Sellers" />
      <ProductsGrid productsQuery={products} />
    </Page>
  )
}

export default BestSellers