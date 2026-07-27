import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "focus-ring h-12 w-full rounded-[16px] border border-forest/12 bg-white px-4 text-sm text-charcoal placeholder:text-charcoal/45 shadow-[0_12px_34px_-28px_rgba(13,79,60,0.55)]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
