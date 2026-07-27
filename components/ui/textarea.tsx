import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "focus-ring min-h-28 w-full resize-none rounded-[18px] border border-forest/12 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/45 shadow-[0_12px_34px_-28px_rgba(13,79,60,0.55)]",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
