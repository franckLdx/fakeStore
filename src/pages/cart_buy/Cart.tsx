import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { ProductsContainer } from "../../components/product/productsContainer/ProductsContainer";
import { useGetCart } from "../../services/cart";
import { CartProduct } from "./CartProduct";

const Cart: FC = () => {
  const { data } = useGetCart()

  return (
    <Page>
      <PageTitle title="Cart" />
      <ProductsContainer>
        {data?.products.map(productCartData => <CartProduct productCartData={productCartData} />)}
      </ProductsContainer>
    </Page>
  )
}

export default Cart