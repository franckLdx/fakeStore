import { FC, MouseEventHandler } from "react";
import { Field, Form } from "react-final-form";
import { Button } from "../../components/button/Button";
import { useGlobalClick } from "../../helpers/hooks";
import { LoginParams } from "../../services/login";
import { Dialog } from "../Dialog";

import styles from './loginDialog.module.scss'

interface LoginDialogProps {
  onClose: () => void
}

export const LoginDialog: FC<LoginDialogProps> = ({ onClose }) => {

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
              <label className={styles.label}>Login</label>
              <Field
                name="username"
                component="input"
                placeholder="login"
              />
            </div>
            <div className={styles.line}>
              <label className={styles.label}>Password</label>
              <Field
                name="password"
                component="input"
                placeholder="password"
                type="password"
                validate={validatePassword}
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
        )}
      />
    </Dialog>
  )
}