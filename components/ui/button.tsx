import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 rounded-[999px] text-sm font-semibold transition duration-300 active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-forest text-white shadow-[0_18px_40px_-22px_rgba(13,79,60,0.9)] hover:bg-forest-deep",
        gold: "bg-gold text-forest-deep shadow-[0_18px_40px_-22px_rgba(217,164,65,0.9)] hover:bg-[#c79334]",
        outline: "border border-forest/20 bg-white/80 text-forest hover:border-forest/40 hover:bg-white",
        ghost: "text-forest hover:bg-forest/5",
        light: "border border-white/25 bg-white/14 text-white backdrop-blur-xl hover:bg-white/22",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
