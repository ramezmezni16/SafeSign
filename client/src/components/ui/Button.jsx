import { forwardRef } from "react"

export const Button = forwardRef(({ className, variant, size, children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-[#007BFF] text-white hover:bg-[#0069d9]",
    outline: "border border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white",
    ghost: "hover:bg-gray-100",
  }

  const sizes = {
    default: "h-10 py-2 px-4 rounded-md",
    sm: "h-8 px-3 rounded-md text-sm",
    lg: "h-12 px-6 rounded-md text-lg",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant || "default"]} ${sizes[size || "default"]} ${className || ""}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"