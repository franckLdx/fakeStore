import { useNavigate } from "react-router-dom"
import { homeUrl } from "../pages/bestSellers/routeHelpers"

export const useNavigateToHome = (): () => void => {
  const navigate = useNavigate()
  return () => navigate(homeUrl)
}