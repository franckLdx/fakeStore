import { lazy } from "react";
import { RouteObject, useParams } from "react-router-dom";
import { CategoryData } from "../../services/categories";

const Category = lazy(() => import('./Category'));

const url = '/categories/'

export const getCategoryRoute = (category: CategoryData) => `${url}${category}`;

export const categoryRoute: RouteObject = {
  path: `${url}:category`,
  Component: () => {
    const { category } = useParams()
    if (!category) {
      throw new Error("Categoy name is missing in the URL")
    }
    return (<Category category={category} />)
  }
}