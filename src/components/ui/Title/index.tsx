import { ReactNode } from "react";
import { TitleContainer } from "./styles";

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <TitleContainer>
      {children}
    </TitleContainer>
  )
}
