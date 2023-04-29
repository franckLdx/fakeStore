import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { Container } from "../../components/container/container";
import { useGetCart } from "../../services/cart";
import { CartProduct } from "./CartProduct";

const Cart: FC = () => {
  const getCartQuery = useGetCart()

  return (
    <Page>
      <PageTitle title="Cart" />
      <Container isLoading={getCartQuery.isLoading}>
        {getCartQuery.data?.products.map(productCartData => <CartProduct productCartData={productCartData} />)}
      </Container>
    </Page>
  )
}

export default Cart