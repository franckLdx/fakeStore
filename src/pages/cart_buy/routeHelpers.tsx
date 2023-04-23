import { lazy } from "react"
import { RouteObject, useNavigate } from "react-router-dom"

const Cart = lazy(() => import("./Cart"))
const NotFound = lazy(() => import('../NotFound'));

export const url = '/card'

export const useNavigateToCard = (): () => void => {
  const navigate = useNavigate()
  return () => navigate(url)
}

export const cardBuyRoute: RouteObject = {
  path: url,
  element: <Cart />,
  errorElement: <NotFound />,
}