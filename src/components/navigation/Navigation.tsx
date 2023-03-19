import { FC } from "react";
import { NavigationItem } from "./NavigationItem";
import { useGetCaterogies } from "../../services/categories";
import { Loader } from "../loader/Loader";

import styles from './navigation.module.scss'

export const Navigation: FC = () => {
  const categories = useGetCaterogies()

  if (categories.isLoading) {
    return <Loader containerClassName={styles.loaderContainer} />
  }

  if (!categories.isSuccess) {
    return null
  }

  return (
    <nav className={styles.navigation}>
      {categories.data.map(
        category => <NavigationItem key={category} category={category} />
      )}
    </nav>
  )
}