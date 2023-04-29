import { FC, ReactNode } from "react";

import styles from "./card.module.scss";

interface CardProps {
  children: ReactNode
  onClick?: () => void
}

export const Card: FC<CardProps> = ({ children, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    {children}
  </div>
)
