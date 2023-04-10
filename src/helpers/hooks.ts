import { useDocumentListener } from "./useDocumentListener";

export const useGlobalClick = (onClick: () => void) => useDocumentListener("click", onClick)