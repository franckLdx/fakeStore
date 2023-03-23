import { FC, ReactNode } from "react";
import { NavigationBar } from "../navigationBar/NavigationBar";

import styles from './page.module.scss'

interface PageProps {
  children: ReactNode
}

export const Page: FC<PageProps> = ({ children }) => (
  <section className={styles.page}>
    <NavigationBar />
    <div className={styles.children}>
      {children}
    </div>
  </section>
)