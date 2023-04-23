import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { useGetProducts } from "../../services/product";
import { ProductsList } from "../../components/product/productsList";

const BestSellers: FC = () => {
  const products = useGetProducts({ limit: 5 })

  return (
    <Page>
      <PageTitle title="Best Sellers" />
      <ProductsList productsQuery={products} />
    </Page>
  )
}

export default BestSellers