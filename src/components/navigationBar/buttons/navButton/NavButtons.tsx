import React, { FC, MouseEventHandler, ReactNode } from 'react'
import { Button } from '../../../button'

import styles from './navButtons.module.scss'

interface NavButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export const NavButton: FC<NavButtonProps> = ({ children, onClick }) => (
  <Button
    className={styles.navButton}
    onClick={onClick}
  >
    {children}
  </Button>
)
