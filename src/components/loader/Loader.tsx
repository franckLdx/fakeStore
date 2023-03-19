import { FC } from "react";

import styles from './loader.module.scss'

interface LoaderProps {
  containerClassName?: string
}

export const Loader: FC<LoaderProps> = ({ containerClassName }) => (
  <div className={containerClassName}>
    <svg viewBox="0 0 100 100">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5"
            floodColor="#fc6767" />
        </filter>
      </defs>
      <circle className={styles.spinner} cx="50" cy="50" r="45" />
    </svg>
  </div>
)