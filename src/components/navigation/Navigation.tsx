import { FC } from "react";
import { NavigationItem } from "./NavigationItem";
import { useGetCaterogies } from "../../services/categories";
import { NavigationLoader } from "./NavigationLoader";

import styles from './navigation.module.scss'

export const Navigation: FC = () => {
  const categories = useGetCaterogies()

  if (categories.isLoading) {
    return <NavigationLoader />
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