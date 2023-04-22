import React, { FC } from 'react'
import { Loader } from '../../components/loader'

import styles from './loginDialog.module.scss'

export const LoginWait: FC = () => (
  <div className={styles.overlay}>
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  </div>
)