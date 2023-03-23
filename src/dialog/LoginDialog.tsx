import { FC } from "react";
import { Field, Form } from "react-final-form";
import { LoginParams } from "../services/login";
import { Dialog } from "./Dialog";

export const LoginDialog: FC = () => {
  const onSubmit = (params: LoginParams) => { }

  return (
    <Dialog>
      <Form<LoginParams> onSubmit={onSubmit}
        render={() => (
          <form >
            <div>
              <label>Login</label>
              <Field name="username" component="input" placeholder="login" />
            </div>
            <div>
              <label>Password</label>
              <Field name="password" component="input" placeholder="password" type="password" />
            </div>
          </form >
        )
        }
      />
    </Dialog>
  )
}