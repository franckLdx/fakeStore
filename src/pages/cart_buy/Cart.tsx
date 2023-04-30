import { FC, useEffect } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { Container } from "../../components";
import { useGetCart } from "../../services/cart";
import { CartProduct } from "./CartProduct";
import { Button } from "../../components";
import { useIsUserLogged } from "../../services";
import { useNavigateToHome } from "../bestSellers/routeHelpers";

const Cart: FC = () => {
  const getCartQuery = useGetCart()
  const isUserLogged = useIsUserLogged()
  const navigateToHome = useNavigateToHome()

  useEffect(
    () => {
      if (!isUserLogged) {
        navigateToHome()
      }
    },
    [isUserLogged]
  )

  return (
    <Page>
      <PageTitle title="Cart" />
      <Container variant="column" isLoading={getCartQuery.isLoading}>
        <Button>FOO</Button>
        {getCartQuery.data?.products.map(productCartData => <CartProduct key={productCartData.productId} productCart={productCartData} />)}
      </Container>
    </Page>
  )
}

export default Cart