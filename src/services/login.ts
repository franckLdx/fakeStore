import { useMutation } from "react-query";

export const loginUrl = 'https://fakestoreapi.com/auth/login';

export type TokentData = string

export interface LoginParams {
  username: string
  password: string
}

export const useLogin = (loginParams: LoginParams) => useMutation({
  mutationKey: ["login"],
  mutationFn: async () => {
    const result = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify(loginParams)
    })
    if (!result.ok) {
      throw new Error("Unknown error")
    }
    return await result.json()
  }
})
