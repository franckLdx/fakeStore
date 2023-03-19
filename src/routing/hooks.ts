import { useNavigate } from "react-router-dom"
import { homeUrl } from "../pages/bestSellers/routeHelpers"

export const useNavigateToHome = () => {
  const navigate = useNavigate()
  return () => navigate(homeUrl)
}