"use client"

import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface ResponsiveSectionProps {
  id?: string
  title: string
  subtitle?: string
  description?: string
  badge?: string
  children: ReactNode
  className?: string
  background?: "default" | "muted" | "white"
  size?: "sm" | "md" | "lg"
}

export function ResponsiveSection({
  id,
  title,
  subtitle,
  description,
  badge,
  children,
  className = "",
  background = "default",
  size = "lg",
}: ResponsiveSectionProps) {
  const backgroundClasses = {
    default: "bg-[#F8F5F0]",
    muted: "bg-[#EFEAD5]",
    white: "bg-white",
  }

  const paddingClasses = {
    sm: "py-6 sm:py-8 lg:py-12",
    md: "py-8 sm:py-12 lg:py-16",
    lg: "py-10 sm:py-14 lg:py-18 xl:py-20",
  }

  return (
    <section id={id} className={`${backgroundClasses[background]} ${paddingClasses[size]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            {badge && (
              <Badge className="bg-[#8B6914] text-white mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full shadow-md">
                {badge}
              </Badge>
            )}
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#2D5016] mb-3 sm:mb-4 lg:mb-6 leading-tight px-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base lg:text-lg text-[#8B6914] mb-3 sm:mb-4 font-semibold">{subtitle}</p>
            )}
            <div className="w-8 sm:w-12 lg:w-16 h-1 bg-[#A0522D] mx-auto mb-4 sm:mb-6 rounded-full"></div>
            {description && (
              <p className="text-xs sm:text-sm lg:text-base text-[#6B4423] max-w-4xl mx-auto leading-relaxed font-medium px-4">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
