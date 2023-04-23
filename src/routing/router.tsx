import {
  createBrowserRouter,
} from "react-router-dom";
import { categoryRoute } from "../pages/categories/routesHelpers";
import { bestSellesRoute } from "../pages/bestSellers/routeHelpers";
import { productRoute } from "../pages/product/routeHelper";
import { cardBuyRoute } from "../pages/cart_buy/routeHelpers";

export const router = createBrowserRouter([
  bestSellesRoute,
  categoryRoute,
  productRoute,
  cardBuyRoute
]);