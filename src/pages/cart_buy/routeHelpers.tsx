import { lazy } from "react"
import { RouteObject, useNavigate } from "react-router-dom"

const Cart = lazy(() => import("./Cart"))
const NotFound = lazy(() => import('../NotFound'));

export const url = '/cart'

export const useNavigateToCart = (): () => void => {
  const navigate = useNavigate()
  return () => navigate(url)
}

export const cartBuyRoute: RouteObject = {
  path: url,
  element: <Cart />,
  errorElement: <NotFound />,
}