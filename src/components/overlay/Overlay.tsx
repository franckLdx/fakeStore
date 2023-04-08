import { FC, ReactNode } from "react";

import styles from './overlay.module.scss'

interface OverlayProps {
  children: ReactNode
}

export const Overlay: FC<OverlayProps> = ({ children }) => (
  <div className={styles.overlay}>
    {children}
  </div>
)