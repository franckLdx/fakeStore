import { RouteObject, useNavigate } from "react-router-dom"
import { NotFound } from "../NotFound"
import BestSellers from "./BestSelllers"

export const homeUrl = '/'

export const useNavigateToHome = (): () => void => {
  const navigate = useNavigate()
  return () => navigate(homeUrl)
}

export const bestSellesRoute: RouteObject = {
  path: homeUrl,
  element: <BestSellers />,
  // errorElement: <NotFound />,
}