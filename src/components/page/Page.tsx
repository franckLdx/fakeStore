import { FC, ReactNode } from "react";
import { NavigationBar } from "../navigationBar";
import { LoginDialog, isDisplayLoginAtom } from "../../dialog";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import styles from './page.module.scss'

interface PageProps {
  children: ReactNode
}

export const Page: FC<PageProps> = ({ children }) => {
  const isDisplayLogin = useAtomValue(isDisplayLoginAtom)
  const setDisplayLoginAtom = useSetAtom(isDisplayLoginAtom)
  const onCloseLogin = () => setDisplayLoginAtom(false)

  return (
    <section className={styles.page}>
      {isDisplayLogin && <LoginDialog onClose={onCloseLogin} />}
      <NavigationBar />
      <div className={styles.children}>
        {children}
      </div>
    </section>
  )
}