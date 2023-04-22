import React, { FC } from 'react'
import { Login } from './Login'
import { Buy } from './Buy'

import styles from './buttons.module.scss'

export const Buttons: FC = () => (
  <div className={styles.buttons}>
    <Login />
    <Buy />
  </div>
)