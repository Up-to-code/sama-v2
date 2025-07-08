"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ResponsiveHeader } from "@/components/responsive-header"
import { ResponsiveSection } from "@/components/responsive-section"
import { MobileOptimizedCard } from "@/components/mobile-optimized-card"
import { ArrowLeft, Bird, CheckCircle, PenTool, Instagram, Camera, Search, BarChart3, Target } from "lucide-react"
import { fakeAPI, type Service } from "@/lib/fake-backend"
import Link from "next/link"

// Icon mapping with proper imports
const iconMap: { [key: string]: any } = {
  PenTool: PenTool,
  Instagram: Instagram,
  Camera: Camera,
  Search: Search,
  BarChart3: BarChart3,
  Target: Target,
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const servicesData = await fakeAPI.getServices()
        setServices(servicesData)
      } catch (error) {
        console.error("Error loading services:", error)
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] font-cairo" dir="rtl">
        <ResponsiveHeader currentPath="/services" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#2D5016] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md animate-pulse">
              <Bird className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">جاري تحميل الخدمات...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] font-cairo" dir="rtl">
      <ResponsiveHeader currentPath="/services" />

      {/* Hero Section */}
      <ResponsiveSection
        badge="خدماتنا"
        title="خدمات متكاملة للمحتوى العقاري"
        description="نقدم مجموعة شاملة من الخدمات المتخصصة في إدارة المحتوى العربي والتسويق الرقمي للقطاع العقاري في المملكة العربية السعودية"
        background="default"
        size="md"
      >
        <div className="text-center">
          <Link href="/">
            <Button className="bg-[#2D5016] hover:bg-[#1F3A0F] text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs sm:text-sm lg:text-base rounded-2xl shadow-md">
              العودة للرئيسية
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </ResponsiveSection>

      {/* Services Grid */}
      <ResponsiveSection background="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <MobileOptimizedCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={IconComponent && <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#2D5016]" />}
                action={{
                  label: "اطلب هذه الخدمة",
                  onClick: () => {
                    window.location.href = "/#contact"
                  },
                }}
              >
                <div className="space-y-3 mb-4">
                  {service.price && (
                    <div className="text-center">
                      <Badge className="bg-[#8B6914] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                        {service.price}
                      </Badge>
                    </div>
                  )}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2D5016] text-xs sm:text-sm lg:text-base mb-3">ما نقدمه:</h4>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#8B6914] flex-shrink-0 mt-0.5" />
                        <span className="text-[#6B4423] text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MobileOptimizedCard>
            )
          })}
        </div>
      </ResponsiveSection>

      {/* CTA Section */}
      <ResponsiveSection
        title="هل تحتاج خدمة مخصصة؟"
        description="نحن نقدم حلول مخصصة تناسب احتياجات مشروعك العقاري. تواصل معنا لمناقشة متطلباتك الخاصة"
        background="muted"
        size="sm"
      >
        <div className="text-center">
          <Link href="/#contact">
            <Button className="bg-[#2D5016] hover:bg-[#1F3A0F] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-2xl shadow-md">
              تواصل معنا الآن
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </ResponsiveSection>
    </div>
  )
}
