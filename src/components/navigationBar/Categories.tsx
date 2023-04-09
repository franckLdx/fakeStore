import { FC } from "react";
import { NavigationItem } from "./navigationItem";
import { useGetCaterogies } from "../../services";
import { Loader } from "../loader";

import styles from './navigation.module.scss'

export const Categories: FC = () => {
  const categories = useGetCaterogies()

  if (categories.isLoading) {
    return <Loader containerClassName={styles.loaderContainer} />
  }

  if (!categories.isSuccess) {
    return null
  }

  return (
    <>
      <nav>
        {categories.data.map(
          category => <NavigationItem key={category} category={category} />
        )}
      </nav>
    </>
  )
}