import { FC } from "react";
import { Loader } from "../../components/loader/Loader";
import { Page } from "../../components/page/Page";
import { PageTitle } from "../../components/page/pageTitle/PageTitle";
import { useGetProduct } from "../../services/product";

import styles from './product.module.scss';

interface ProductProps {
  productId: number
}

const Product: FC<ProductProps> = ({ productId }) => {
  const productQuery = useGetProduct(productId)

  return (
    <Page>
      {productQuery.isLoading && <Loader containerClassName={styles.loaderContainer} />}
      {productQuery.isSuccess && <>
        <PageTitle title={productQuery.data.title} />
        <h3> subtitle={productQuery.data.description}</h3>
        <h3>Price: ${productQuery.data.price}</h3>
        <h3>Rate: ${productQuery.data.rating.rate}  ({productQuery.data.rating.count} votes)</h3>
        <div className={styles.imageContainer}>
          <img src={productQuery.data.image} alt="product's image" />
        </div>
      </>
      }
    </Page>
  )
}

export default Product