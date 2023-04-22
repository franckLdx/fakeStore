import { FC, MouseEventHandler, ReactNode } from "react";
import { Overlay } from "../components/overlay/Overlay";

import styles from './dialog.module.scss'

interface DialogProps {
  className?: string
  children: ReactNode
}

export const Dialog: FC<DialogProps> = ({ className, children }) => {
  const onClick: MouseEventHandler<HTMLDivElement> = event => event.stopPropagation()

  return (
    <Overlay>
      <div className={`${styles.dialogContainer} ${className ?? ''}`}>
        <div className={styles.dialog} id="dialog" onClick={onClick}>
          {children}
        </div>
      </div>
    </Overlay>
  )
}