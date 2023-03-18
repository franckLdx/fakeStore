import { FC } from "react";
import { NavigationItem } from "./NavigationItem";
import { useGetCaterogies } from "../../services/categories";
import { Loader } from "../loader/Loader";
import { NavigationLoader } from "./NavigationLoader";

export const Navigation: FC = () => {
  const categories = useGetCaterogies()

  if (categories.isLoading) {
    return <NavigationLoader />
  }

  if (!categories.isSuccess) {
    return null
  }

  return (
    <nav>
      {categories.data.map(
        category => <NavigationItem key={category} category={category} />
      )}
    </nav>
  )
}