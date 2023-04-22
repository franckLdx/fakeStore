import React, { FC } from "react";
import { FakeStoreBrand } from "./fakeStoreBrand";
import { Categories } from "./categories/Categories";
import { Buttons } from "./buttons";

import styles from './navigationBar.module.scss'

export const NavigationBar: FC = () => (
  <div className={styles.navigationBar}>
    <div className={styles.content}>
      <FakeStoreBrand />
      <Categories />
      <Buttons />
    </div>
  </div>
)
