import React, { FC } from 'react'
import { Login } from './Login'
import { Card_Buy } from './Cart_Buy'

import styles from './buttons.module.scss'

export const Buttons: FC = () => (
  <div className={styles.buttons}>
    <Login />
    <Card_Buy />
  </div>
)