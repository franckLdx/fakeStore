import { FC } from "react";

import styles from './pageTitle.module.scss'

interface PageTitleProps {
  title: string
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <div>
    <h2 className={styles.pageTitle}>{title}</h2>
  </div>
)