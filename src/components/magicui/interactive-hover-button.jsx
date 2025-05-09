import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <a href="https://github.com/Ehsan-Fouladi" ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-xl border bg-background px-6 py-3 text-center font-semibold",
        className
      )} {...props}>
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-xl bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:-translate-x-12 group-hover:opacity-0 text-black">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full -translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="rotate-180" />
      </div>
    </a>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
