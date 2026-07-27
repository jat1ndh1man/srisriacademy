import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-forest/10 bg-white shadow-[0_24px_70px_-42px_rgba(13,79,60,0.5)]",
        className,
      )}
      {...props}
    />
  );
}
