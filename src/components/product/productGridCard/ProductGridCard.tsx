import { FC } from "react";
import { useNavigateToProduct } from "../../../pages/product/routeHelper";
import { ProductData } from "../../../services/product";
import { Card } from "../../card";

import styles from "./productGridCard.module.scss";

interface ProductGridCardProps {
  product: ProductData
}

export const ProductGridCard: FC<ProductGridCardProps> = ({ product }) => {
  const navigateToProduct = useNavigateToProduct(product.id)

  return (
    <Card className={styles.productGridCard} onClick={navigateToProduct}>
      <h1>{product.title}</h1>
      <img className={styles.image} src={product.image} alt={`Photo of ${product.title}`} />
    </Card>
  )
}