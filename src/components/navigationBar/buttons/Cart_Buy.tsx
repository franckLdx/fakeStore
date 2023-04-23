import React, { FC } from 'react'
import { NavButton } from './navButton'
import { useNavigateToCard } from '../../../pages/cart_buy/routeHelpers'

export const Card_Buy: FC = () => {
  const navigate = useNavigateToCard()
  return (
    <NavButton onClick={navigate}>
      See Card & Buy !
    </NavButton>
  )
}