import { FC, MouseEventHandler, useState } from "react";
import { Field, Form } from "react-final-form";
import { Button } from "../../components/button/Button";
import { useGlobalClick } from "../../helpers/hooks";
import { LoginParams, useLogin } from "../../services/login";
import { Dialog } from "../Dialog";
import { useSetAtom } from "jotai";
import { isDisplayLoginAtom } from "./atom";
import { LoginWait } from "./LoginWait";
import classNames from "classnames";

import styles from './loginDialog.module.scss'

export const LoginDialog: FC = () => {
  const setDisplayLoginAtom = useSetAtom(isDisplayLoginAtom)
  const onClose = () => setDisplayLoginAtom(false)
  const [isLoged, setIsLoged] = useState(false)

  const doLogin = useLogin()

  const onClick: MouseEventHandler<HTMLFormElement> = event => event.stopPropagation()

  const onSubmit = async (params: LoginParams) => {
    await doLogin.mutateAsync(params)
    setIsLoged(true)
    setTimeout(() => onClose(), 200)
  }

  useGlobalClick(onClose)

  const validatePassword = (value: string | undefined) => value && value.length >= 6 ? undefined : "too short"

  return (
    <Dialog className={classNames(styles.dialog, { [styles['dialog--loged']]: isLoged })}>
      <Form<LoginParams> onSubmit={onSubmit}
        render={({ handleSubmit, invalid }) => (
          <form
            className={styles.login}
            onSubmit={handleSubmit}
            onClick={onClick}
          >
            {doLogin.isLoading && <LoginWait />}
            <div className={styles.userName}>
              <label className={styles.label} htmlFor="username">Login</label>
              <Field
                name="username"
                component="input"
                placeholder="login"
              />
            </div>
            <div className={styles.line}>
              <label className={styles.label} htmlFor="password">Password</label>
              <Field
                name="password"
                validate={validatePassword}
                component="input"
                placeholder="password" type="password"
              />
            </div>
            <div className={styles.buttonsContainer}>
              <Button
                className={styles.button}
                type="submit"
                disabled={invalid || doLogin.isLoading}
              >
                Login
              </Button>
              <Button
                className={styles.button}
                onClick={onClose}
                disabled={doLogin.isLoading}
              >
                Cancel
              </Button>
            </div>
          </form >
        )
        }
      />
    </Dialog >
  )
}