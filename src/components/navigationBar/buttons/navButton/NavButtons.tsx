import React, { FC, MouseEventHandler, ReactNode } from 'react'
import { Button } from '../../../button'

import styles from './navButtons.module.scss'

interface NavButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  disabled?: boolean
}

export const NavButton: FC<NavButtonProps> = ({ children, onClick, disabled }) => (
  <Button
    className={styles.navButton}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
)
