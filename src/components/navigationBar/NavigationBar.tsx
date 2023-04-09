import { FC, MouseEventHandler } from "react";
import { Button } from "../button";
import { FakeStoreBrand } from "./fakeStoreBrand";
import { Categories } from "./Categories";

import styles from './navigationBar.module.scss'
import { useSetAtom } from "jotai";
import { isDisplayLoginAtom } from "../../dialog/login/atom";

export const NavigationBar: FC = () => {
  const setIsDisplayLogin = useSetAtom(isDisplayLoginAtom)
  const onOpenLogin: MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    setIsDisplayLogin(true)
  }

  return (
    <div className={styles.navigationBar}>
      <div className={styles.content}>
        <FakeStoreBrand />
        <Categories />
        <div className={styles.loginButtonContainer}>
          <Button className={styles.loginButton} onClick={onOpenLogin}>Login</Button>
        </div>
      </div>
    </div>
  )
}
