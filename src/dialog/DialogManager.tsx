import React, { FC } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { LoginDialog, isDisplayLoginAtom } from "./login";

export const DialogManager: FC = () => {
  const isDisplayLogin = useAtomValue(isDisplayLoginAtom)
  const setDisplayLoginAtom = useSetAtom(isDisplayLoginAtom)
  const onCloseLogin = () => setDisplayLoginAtom(false)

  return (<>{
    isDisplayLogin && <LoginDialog onClose={onCloseLogin} />}
  </>)
}