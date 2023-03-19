import { lazy } from "react"
import { RouteObject, useNavigate, useParams } from "react-router-dom"

const Product = lazy(() => import('./Product'));

export const productUrl = '/products/'

export const productRoute: RouteObject = {
  path: `${productUrl}:productId`,
  Component: () => {
    const { productId } = useParams()
    if (!productId) {
      throw new Error("Products name is missing in the URL")
    }
    return (<Product productId={Number(productId)} />)
  }
}

export const useNavigateToProduct = (productId: number) => {
  const navigate = useNavigate()
  return () => navigate(`${productUrl}${productId}`)
}