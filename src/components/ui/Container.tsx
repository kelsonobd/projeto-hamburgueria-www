import { cn } from "@/lib/utils"
import React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(" w-full mx-auto px-4", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
