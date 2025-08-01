import React from "react"
import { cn } from "../lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"

    const variants = {
      default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
      secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
      destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
      outline: "text-gray-900 border-gray-300",
    }

    return <div ref={ref} className={cn(baseClasses, variants[variant], className)} {...props} />
  },
)
Badge.displayName = "Badge"
