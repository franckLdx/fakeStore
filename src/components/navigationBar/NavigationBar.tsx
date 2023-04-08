import { FC, useState } from "react";
import { LoginDialog } from "../../dialog/LoginDialog";
import { Button } from "../button/Button";
import { FakeStoreBrand } from "./fakeStoreBrand/FakeStoreBrand";
import { Categories } from "./Categories";

import styles from './navigationBar.module.scss'

export const NavigationBar: FC = () => {
  const [isShowLogin, setIsShowLogin] = useState<boolean>(false)

  const onCloseLogin = () => setIsShowLogin(false)

  const onOpenLogin: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    setIsShowLogin(true)
  }

  return (
    <div className={styles.navigationBar}>
      <div className={styles.content}>
        {isShowLogin && <LoginDialog onClose={onCloseLogin} />}
        <FakeStoreBrand />
        <Categories />
        <Button onClick={onOpenLogin}>Login</Button>
      </div>
    </div>
  )
}
