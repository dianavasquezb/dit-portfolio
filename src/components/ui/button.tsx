import React from "react"
import { cn } from "../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 hover:bg-gray-100 text-gray-900",
      ghost: "hover:bg-gray-100 text-gray-900",
    }

    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
    }

    return <button className={cn(baseClasses, variants[variant], sizes[size], className)} ref={ref} {...props} />
  },
)
Button.displayName = "Button"
