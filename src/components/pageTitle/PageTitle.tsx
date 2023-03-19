import { FC } from "react";

import styles from './pageTitle.module.scss'

interface PageTitleProps {
  title: string
}

export const PageTitle: FC<PageTitleProps> = ({ title }) =>
  <h2 className={styles.pageTitle}>{title}</h2>
