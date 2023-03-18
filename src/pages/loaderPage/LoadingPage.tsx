import { FC } from "react";
import { Loader } from "../../components/loader/Loader";

import styles from './loaderPage.module.scss'

export const LoadingPage: FC = () =>
  <div className={styles.loader}>
    <Loader />
  </div>