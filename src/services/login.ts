import { useMutation } from "@tanstack/react-query";
import { atom, useSetAtom } from "jotai";

export const loginUrl = 'https://fakestoreapi.com/auth/login';

export type TokentData = string

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}
export const useLogin = () => {
  const setLoginToken = useSetAtom(loginToken)

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (loginParams: LoginParams) => {
      const result = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },

        body: JSON.stringify(loginParams)
      })
      if (!result.ok) {
        throw new Error("Unknown error")
      }
      return await result.json()
    },
    onMutate: () => setLoginToken(undefined),
    onSuccess: (response) => setLoginToken(response.token),
  })
}

export const loginToken = atom<string | undefined>(undefined)
loginToken.debugLabel = "Login token"