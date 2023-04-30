import React, { FC } from 'react'
import { NavButton } from './navButton'
import { useNavigateToCart } from '../../../pages/cart_buy/routeHelpers'
import { useIsUserLogged } from '../../../services'

export const Card_Buy: FC = () => {
  const navigate = useNavigateToCart()
  const IsUserLogged = useIsUserLogged()

  return (
    <NavButton onClick={navigate} disabled={!IsUserLogged} >
      See Card & Buy !
    </NavButton>
  )
}