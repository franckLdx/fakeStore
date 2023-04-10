import { FC, MouseEventHandler } from "react";
import { Field, Form } from "react-final-form";
import { Button } from "../../components/button/Button";
import { useGlobalClick } from "../../helpers/hooks";
import { LoginParams } from "../../services/login";
import { Dialog } from "../Dialog";
import { useSetAtom } from "jotai";
import { isDisplayLoginAtom } from "./atom";

import styles from './loginDialog.module.scss'

export const LoginDialog: FC = () => {
  const setDisplayLoginAtom = useSetAtom(isDisplayLoginAtom)
  const onClose = () => setDisplayLoginAtom(false)

  const onClick: MouseEventHandler<HTMLFormElement> = event => event.stopPropagation()

  const onSubmit = (params: LoginParams) => { }

  useGlobalClick(onClose)

  const validatePassword = (value: string | undefined) => value && value.length >= 8 ? undefined : "boo"

  return (
    <Dialog>
      <Form<LoginParams> onSubmit={onSubmit}
        render={({ handleSubmit, invalid }) => (
          <form className={styles.login} onSubmit={handleSubmit} onClick={onClick}>
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
                disabled={invalid}>
                Login
              </Button>
              <Button
                className={styles.button}
                onClick={onClose}>
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