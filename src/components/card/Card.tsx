import { FC, ReactNode } from "react";

import styles from "./card.module.scss";
import classNames from "classnames";

interface CardProps {
  className?: string
  children: ReactNode
  onClick?: () => void
}

export const Card: FC<CardProps> = ({ className, children, onClick }) => {
  return (
    <div className={classNames(`${styles.card}  ${className}`, { [styles['card--clickable']]: onClick })} onClick={onClick}>
      {children}
    </div>
  )
}