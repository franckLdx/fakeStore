import { FC, ReactNode } from "react"
import { Loader } from "../loader"

import styles from './container.module.scss'

interface ContainerProps {
  variant: 'grid' | 'list'
  children: ReactNode
  isLoading?: boolean
}

export const Container: FC<ContainerProps> = ({ variant, isLoading, children }) => {
  const variantClassName = styles[`container--${variant}`]
  return (
    <div className={`${styles.container} ${variantClassName}`}>
      {isLoading && <Loader containerClassName={styles.loaderContainer} />}
      {children}
    </div>
  )
}