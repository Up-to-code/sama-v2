"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

interface MobileOptimizedCardProps {
  title: string
  description?: string
  icon?: ReactNode
  children: ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
  variant?: "default" | "featured"
}

export function MobileOptimizedCard({
  title,
  description,
  icon,
  children,
  action,
  className = "",
  variant = "default",
}: MobileOptimizedCardProps) {
  const cardClasses =
    variant === "featured"
      ? "bg-gradient-to-br from-[#2D5016] to-[#1F3A0F] text-white shadow-xl"
      : "bg-white shadow-sm hover:shadow-md"

  const iconBgClasses = variant === "featured" ? "bg-white/20" : "bg-[#EFEAD5]"

  const titleClasses = variant === "featured" ? "text-white" : "text-[#2D5016]"

  const descriptionClasses = variant === "featured" ? "text-gray-200" : "text-[#6B4423]"

  return (
    <Card className={`${cardClasses} border-0 rounded-3xl transition-all duration-300 ${className}`}>
      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
        {icon && (
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${iconBgClasses} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-200 hover:scale-105`}
          >
            {icon}
          </div>
        )}
        <CardTitle
          className={`text-sm sm:text-base lg:text-lg ${titleClasses} font-bold text-center mb-2 leading-tight`}
        >
          {title}
        </CardTitle>
        {description && (
          <p className={`text-xs sm:text-sm ${descriptionClasses} text-center leading-relaxed`}>{description}</p>
        )}
      </CardHeader>
      <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">{children}</CardContent>
      {action && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <Button
            onClick={action.onClick}
            className={`w-full py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-2xl transition-all duration-200 ${
              variant === "featured"
                ? "bg-white text-[#2D5016] hover:bg-gray-100 shadow-md"
                : "bg-[#2D5016] hover:bg-[#1F3A0F] text-white shadow-md"
            }`}
          >
            {action.label}
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          </Button>
        </div>
      )}
    </Card>
  )
}
