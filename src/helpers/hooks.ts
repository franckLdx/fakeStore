import { useEffect } from "react"
import { useDocumentListener } from "./useDocumentListener";

export const useClickOutside = (onClick: () => void) => useDocumentListener("click", onClick)