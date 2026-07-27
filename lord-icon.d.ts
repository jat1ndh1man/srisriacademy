import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

type LordIconProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  colors?: string;
  loading?: "lazy" | "interaction" | "delay";
  speed?: number | string;
  src?: string;
  state?: string;
  stroke?: "light" | "regular" | "bold";
  target?: string;
  trigger?: "in" | "click" | "hover" | "loop" | "loop-on-hover" | "morph" | "boomerang" | "sequence";
  style?: CSSProperties;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": LordIconProps;
    }
  }
}

export {};
