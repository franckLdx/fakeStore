import { useEffect } from "react"

export const useDocumentListener = (event: string, listener: () => void) => {
  useEffect(
    () => {
      document.addEventListener(event, () => listener());
      return () => document.removeEventListener(event, listener)
    },
    []
  )
}