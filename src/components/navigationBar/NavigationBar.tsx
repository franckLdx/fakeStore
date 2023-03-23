import { FC, useState } from "react";
import { LoginDialog } from "../../dialog/LoginDialog";
import { FakeStoreBrand } from "./fakeStoreBrand/FakeStoreBrand";
import { Navigation } from "./Navigation";

import styles from './navigationBar.module.scss'

export const NavigationBar: FC = () => {
  const [isShowLogin, setIsShowLogin] = useState<boolean>(false)
  const toggleIsShowLogin = () => setIsShowLogin(current => !current)

  return (
    <div className={styles.navigationBar}>
      {isShowLogin && <LoginDialog />}
      <FakeStoreBrand />
      <Navigation />
      <button className={styles.loginButton} onClick={toggleIsShowLogin}>Login</button>
    </div>
  )
}
