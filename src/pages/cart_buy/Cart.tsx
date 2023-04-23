import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { ProductsContainer } from "../../components/product/productsContainer/ProductsContainer";
import { useGetCart } from "../../services/cart";

const Cart: FC = () => {
  const { data } = useGetCart()

  return (
    <Page>
      <PageTitle title="Cart" />
      <ProductsContainer>FOO</ProductsContainer>
    </Page>
  )
}

export default Cart