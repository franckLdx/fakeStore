import { FC } from "react";
import { ProductData } from "../../services/product";

import styles from "./productCard.module.scss";

interface ProductCardProps {
  product: ProductData
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => (
  <div className={styles.productCard}>
    <h1>{product.title}</h1>
    <img className={styles.image} src={product.image} alt={`Photo of ${product.title}`} />
  </div>
)