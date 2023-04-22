import { FC, ReactNode } from "react";
import { NavigationBar } from "../navigationBar";
import { DialogManager } from "../../dialog/DialogManager";

import styles from './page.module.scss'

interface PageProps {
  children: ReactNode
}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <section className={styles.page}>
      <DialogManager />
      <NavigationBar />
      <div className={styles.children}>
        {children}
      </div>
    </section>
  )
}