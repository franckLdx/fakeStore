import { FC, ReactNode } from "react";
import { Overlay } from "../components/overlay/Overlay";

import styles from './dialog.module.scss'

interface DialogProps {
  children: ReactNode
}

export const Dialog: FC<DialogProps> = ({ children }) => (
  <Overlay>
    <div className={styles.dialogContainer}>
      <div className={styles.dialog}>
        {children}
      </div>
    </div>
  </Overlay>
)