import { FC, ReactNode } from "react";

import styles from "./card.module.scss";

interface CardProps {
  variant: 'fitContent' | 'fullWidth'
  children: ReactNode
  onClick?: () => void
}

export const Card: FC<CardProps> = ({ variant, children, onClick }) => {
  const variantClassname = styles[`card--${variant}`]
  return (
    <div className={`${styles.card} ${variantClassname}`} onClick={onClick}>
      {children}
    </div>
  )
}