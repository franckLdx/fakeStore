import { FC, ReactNode } from "react"
import { Loader } from "../loader"

import styles from './container.module.scss'

interface ContainerProps {
  children: ReactNode
  isLoading?: boolean
}

export const Container: FC<ContainerProps> = ({ isLoading, children }) => (
  <div className={styles.container}>
    {isLoading && <Loader containerClassName={styles.loaderContainer} />}
    {children}
  </div>
)
