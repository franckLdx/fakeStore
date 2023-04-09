import { FC } from "react";
import { Field, Form } from "react-final-form";
import { Button } from "../../components/button/Button";
import { useClickOutside } from "../../helpers/hooks";
import { LoginParams } from "../../services/login";
import { Dialog } from "../Dialog";

import styles from './loginDialog.module.scss'

interface LoginDialogProps {
  onClose: () => void
}

export const LoginDialog: FC<LoginDialogProps> = ({ onClose }) => {
  const onSubmit = (params: LoginParams) => { }
  useClickOutside(onClose)

  const onCancel: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation()
    onClose()
  }

  return (
    <Dialog>
      <Form<LoginParams> onSubmit={onSubmit}
        render={() => (
          <form className={styles.login} method="POST">
            <div className={styles.userName}>
              <label className={styles.label}>Login</label>
              <Field name="username" component="input" placeholder="login" />
            </div>
            <div className={styles.line}>
              <label className={styles.label}>Password</label>
              <Field name="password" component="input" placeholder="password" type="password" />
            </div>
            <div className={styles.buttonsContainer}>
              <Button className={styles.button} type="submit" onClick={(e) => e.stopPropagation()}>Login</Button>
              <Button className={styles.button} onClick={onCancel}>Cancel</Button>
            </div>
          </form >
        )}
      />
    </Dialog>
  )
}