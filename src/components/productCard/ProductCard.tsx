import { FC } from "react";
import { useNavigateToProduct } from "../../pages/product/routeHelper";
import { ProductData } from "../../services/product";

import styles from "./productCard.module.scss";

interface ProductCardProps {
  product: ProductData
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigateToProduct = useNavigateToProduct(product.id)
  return (
    <div className={styles.productCard} onClick={navigateToProduct}>
      <h1 className={styles.title}>{product.title}</h1>
      <img className={styles.image} src={product.image} alt={`Photo of ${product.title}`} />
    </div>
  )
}