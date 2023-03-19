import { FC } from "react";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { useGetProduct } from "../../services/product";

import syles from './product.module.scss';

interface ProductProps {
  productId: number
}

const Product: FC<ProductProps> = ({ productId }) => {
  const product = useGetProduct(productId)

  if (!product.isSuccess) {
    return null
  }

  return (
    <Page>
      <PageTitle title={product.data.title} />
      <h3> subtitle={product.data.description}</h3>
      <div className={syles.imageContainer}>
        <img src={product.data.image} alt="product's image" />
      </div>
    </Page>
  )
}

export default Product