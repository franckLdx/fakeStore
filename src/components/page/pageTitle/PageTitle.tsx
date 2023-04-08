import { FC } from "react";

import styles from './pageTitle.module.scss'

interface PageTitleProps {
  title: string
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <>
    <div className={styles.blank}></div>
    <h2 className={styles.pageTitle}>{title}</h2>
  </>
)