import {
  createBrowserRouter,
} from "react-router-dom";
import { categoryRoute } from "../pages/categories/routesHelpers";
import { bestSellesRoute } from "../pages/bestSellers/routeHelpers";
import { productRoute } from "../pages/product/routeHelper";

export const router = createBrowserRouter([
  bestSellesRoute,
  categoryRoute,
  productRoute
]);