import { FC } from "react";
import { FakeStoreBrand } from "../fakeStoreBrand/FakeStoreBrand";
import { Navigation } from "./Navigation";

import styles from './navigationBar.module.scss'

export const NavigationBar: FC = () => (
  <div className={styles.navigationBar}>
    <FakeStoreBrand />
    <Navigation />
  </div>
)
