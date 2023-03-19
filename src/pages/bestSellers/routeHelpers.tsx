import { lazy } from "react"
import { RouteObject, useNavigate } from "react-router-dom"
import BestSellers from "./BestSelllers"

const NotFound = lazy(() => import('../NotFound'));

export const homeUrl = '/'

export const useNavigateToHome = (): () => void => {
  const navigate = useNavigate()
  return () => navigate(homeUrl)
}

export const bestSellesRoute: RouteObject = {
  path: homeUrl,
  element: <BestSellers />,
  errorElement: <NotFound />,
}