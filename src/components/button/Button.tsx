import React, { FC, ReactNode } from 'react'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

import styles from './button.module.scss'

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => (
  <button className={`${styles.button} ${className}`} {...props}>
    {children}
  </button>
)