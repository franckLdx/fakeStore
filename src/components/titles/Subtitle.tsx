import { FC } from "react";

interface SubtitleProps {
  subtitle: string
}

export const Subtitle: FC<SubtitleProps> = ({ subtitle }) =>
  <h3>{subtitle}</h3>
