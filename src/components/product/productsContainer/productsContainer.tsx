import { FC, ReactNode } from "react"

import styles from './productsContainer.module.scss'

interface ProductsContainerProps {
  children: ReactNode
}

export const ProductsContainer: FC<ProductsContainerProps> = ({ children }) => (
  <div className={styles.productsContainer}>
    {children}
  </div>
)
