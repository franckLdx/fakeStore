import React, { FC } from 'react'
import { NavButton } from './navButton'
import { useNavigate } from 'react-router-dom'

export const Buy: FC = () => {
  const navigate = useNavigate();
  const onClick = () => navigate("/session-timed-out");

  return (
    <NavButton onClick={onClick}>
      Buy !
    </NavButton>
  )
}