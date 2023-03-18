import { RouteObject, useNavigate } from "react-router-dom"
import { NotFound } from "../NotFound"
import { Home } from "./Home"

export const homeUrl = '/'

export const useNavigateToHome = (): () => void => {
  const navigate = useNavigate()
  return () => navigate(homeUrl)
}

export const homeRoute: RouteObject = {
  path: homeUrl,
  element: <Home />,
  errorElement: <NotFound />,
}