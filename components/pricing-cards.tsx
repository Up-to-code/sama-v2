"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Zap, Crown } from "lucide-react"
import type { Package } from "@/lib/fake-backend"

interface PricingCardsProps {
  packages: Package[]
  loading?: boolean
}

const packageIcons = {
  basic: Star,
  professional: Zap,
  enterprise: Crown,
}

export function PricingCards({ packages, loading }: PricingCardsProps) {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-white border-0 rounded-3xl animate-pulse">
              <div className="h-96 bg-gray-200 rounded-3xl"></div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
      {packages.map((pkg, index) => {
        const IconComponent = packageIcons[pkg.id as keyof typeof packageIcons] || Star
        const isPopular = pkg.popular
        const gradientClass = isPopular ? "bg-gradient-to-br from-[#2D5016] to-[#1F3A0F]" : "bg-white"
        const textColorClass = isPopular ? "text-white" : "text-[#2D5016]"
        const borderClass = isPopular
          ? "ring-4 ring-[#2D5016] ring-opacity-20 shadow-2xl"
          : "border border-[#E5DCC8] shadow-lg"

        return (
          <Card
            key={pkg.id}
            className={`${gradientClass} ${borderClass} rounded-3xl relative transform hover:scale-105 transition-all duration-300 overflow-hidden`}
          >
            {/* Popular Badge */}
            {isPopular && (
              <div className="absolute -top-3 right-1/2 transform translate-x-1/2 z-10">
                <Badge className="bg-[#8B6914] text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                  الأكثر شعبية
                </Badge>
              </div>
            )}

            {/* Background Pattern for Popular Card */}
            {isPopular && (
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full opacity-15"></div>
              </div>
            )}

            <CardHeader className={`pb-6 px-6 sm:px-8 relative z-10 ${isPopular ? "pt-12" : "pt-8"}`}>
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                  isPopular ? "bg-white bg-opacity-20" : "bg-[#EFEAD5]"
                }`}
              >
                <IconComponent className={`w-8 h-8 ${isPopular ? "text-white" : "text-[#2D5016]"}`} />
              </div>

              {/* Package Name */}
              <h3 className={`text-2xl font-bold mb-2 ${textColorClass}`}>{pkg.name}</h3>

              {/* Description */}
              <p className={`text-sm mb-6 ${isPopular ? "text-gray-200" : "text-[#6B4423]"}`}>{pkg.description}</p>

              {/* Price */}
              <div className="text-center mb-6">
                <div className={`text-4xl font-bold ${textColorClass} mb-1`}>
                  {pkg.price}
                  <span className="text-lg font-medium"> ر.س</span>
                </div>
                <div className={`text-sm ${isPopular ? "text-gray-300" : "text-[#6B4423]"}`}>{pkg.period}</div>
              </div>
            </CardHeader>

            <CardContent className="px-6 sm:px-8 pb-8 relative z-10">
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? "text-green-300" : "text-[#8B6914]"}`}
                    />
                    <span className={`text-sm leading-relaxed ${isPopular ? "text-gray-200" : "text-[#6B4423]"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-4 text-base font-semibold rounded-2xl transition-all duration-300 ${
                  isPopular
                    ? "bg-white text-[#2D5016] hover:bg-gray-100 shadow-lg"
                    : "bg-[#2D5016] text-white hover:bg-[#1F3A0F] shadow-md"
                }`}
              >
                {isPopular ? "ابدأ الآن" : "اختر هذه الباقة"}
              </Button>

              {/* Additional Info for Popular Package */}
              {isPopular && (
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-300">✨ استشارة مجانية لمدة ساعة</p>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
