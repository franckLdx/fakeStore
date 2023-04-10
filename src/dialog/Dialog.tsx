import { FC, MouseEventHandler, ReactNode } from "react";
import { Overlay } from "../components/overlay/Overlay";

import styles from './dialog.module.scss'

interface DialogProps {
  children: ReactNode
}

export const Dialog: FC<DialogProps> = ({ children }) => {
  const onClick: MouseEventHandler<HTMLDivElement> = event => event.stopPropagation()

  return (
    <Overlay>
      <div className={styles.dialogContainer}>
        <div className={styles.dialog} id="dialog" onClick={onClick}>
          {children}
        </div>
      </div>
    </Overlay>
  )
}