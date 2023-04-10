import React, { FC } from "react";
import { useAtomValue } from "jotai";
import { LoginDialog, isDisplayLoginAtom } from "./login";

export const DialogManager: FC = () => {
  const isDisplayLogin = useAtomValue(isDisplayLoginAtom)

  return (<>{
    isDisplayLogin && <LoginDialog />}
  </>)
}