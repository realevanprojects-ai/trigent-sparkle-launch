import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden group backdrop-blur-sm",
  {
    variants: {
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 py-1 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(liquidButtonVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {/* Liquid effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated liquid blob */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 rounded-full group-hover:w-full group-hover:h-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out" />
        </div>
        
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        
        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        
        {/* Content */}
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          {children}
        </span>
      </button>
    );
  }
);

LiquidButton.displayName = "LiquidButton";

export { LiquidButton, liquidButtonVariants };