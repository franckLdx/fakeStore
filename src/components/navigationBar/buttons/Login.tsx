import React, { FC, MouseEventHandler } from 'react'
import { useSetAtom } from 'jotai'
import { isDisplayLoginAtom } from '../../../dialog'
import { NavButton } from './navButton'

export const Login: FC = () => {
  const setIsDisplayLogin = useSetAtom(isDisplayLoginAtom)
  const onOpenLogin: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    setIsDisplayLogin(true)
  }

  return (
    <NavButton onClick={onOpenLogin}>
      Login
    </NavButton>
  )
}