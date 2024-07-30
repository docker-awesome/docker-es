import type { ButtonProps } from "@tarojs/components";
import type { FC, PropsWithChildren } from "react";

export interface TaroButtonProps extends ButtonProps, PropsWithChildren {
  delay?: number;
}

declare const TaroButton: FC<TaroButtonProps>;

export default TaroButton;
