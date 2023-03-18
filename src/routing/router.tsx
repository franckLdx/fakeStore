import {
  createBrowserRouter,
} from "react-router-dom";
import { categoryRoute } from "../pages/categories/routesHelpers";
import { bestSellesRoute } from "../pages/bestSellers/routeHelpers";

export const router = createBrowserRouter([
  bestSellesRoute,
  categoryRoute
]);