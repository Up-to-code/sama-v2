"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"
import type { Package } from "@/lib/fake-backend"

interface PricingComparisonProps {
  packages: Package[]
}

const allFeatures = [
  "عدد المنشورات الشهرية",
  "إدارة المنصات الاجتماعية",
  "تقارير الأداء",
  "الدعم الفني",
  "كتابة المحتوى",
  "تحسين محركات البحث",
  "جلسات التصوير",
  "الاستراتيجية التسويقية",
  "مدير حساب مخصص",
  "دعم ٢٤/٧",
]

const packageFeatureMap: { [key: string]: { [key: string]: string | boolean } } = {
  basic: {
    "عدد المنشورات الشهرية": "١٥ منشور",
    "إدارة المنصات الاجتماعية": "٣ منصات",
    "تقارير الأداء": "شهرية",
    "الدعم الفني": true,
    "كتابة المحتوى": "أساسي",
    "تحسين محركات البحث": false,
    "جلسات التصوير": false,
    "الاستراتيجية التسويقية": false,
    "مدير حساب مخصص": false,
    "دعم ٢٤/٧": false,
  },
  professional: {
    "عدد المنشورات الشهرية": "٣٠ منشور",
    "إدارة المنصات الاجتماعية": "جميع المنصات",
    "تقارير الأداء": "أسبوعية",
    "الدعم الفني": true,
    "كتابة المحتوى": "متقدم",
    "تحسين محركات البحث": true,
    "جلسات التصوير": "شهرية",
    "الاستراتيجية التسويقية": true,
    "مدير حساب مخصص": false,
    "دعم ٢٤/٧": false,
  },
  enterprise: {
    "عدد المنشورات الشهرية": "غير محدود",
    "إدارة المنصات الاجتماعية": "جميع المنصات",
    "تقارير الأداء": "يومية",
    "الدعم الفني": true,
    "كتابة المحتوى": "شامل",
    "تحسين محركات البحث": true,
    "جلسات التصوير": "أسبوعية",
    "الاستراتيجية التسويقية": "شاملة",
    "مدير حساب مخصص": true,
    "دعم ٢٤/٧": true,
  },
}

export function PricingComparison({ packages }: PricingComparisonProps) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-4 gap-4">
          {/* Features Column */}
          <div className="space-y-4">
            <div className="h-32 flex items-end pb-4">
              <h3 className="text-lg font-bold text-[#2D5016]">المميزات</h3>
            </div>
            {allFeatures.map((feature) => (
              <div key={feature} className="h-16 flex items-center border-b border-[#E5DCC8] pb-4">
                <span className="text-[#6B4423] font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Package Columns */}
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`${pkg.popular ? "ring-2 ring-[#2D5016]" : ""} rounded-3xl`}>
              <CardHeader className="text-center pb-4">
                {pkg.popular && <Badge className="bg-[#2D5016] text-white mb-2 mx-auto">الأكثر شعبية</Badge>}
                <CardTitle className="text-xl text-[#2D5016] mb-2">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold" style={{ color: pkg.color }}>
                  {pkg.price} ر.س
                </div>
                <p className="text-sm text-[#6B4423]">{pkg.period}</p>
                <Button className="w-full mt-4 text-white rounded-2xl" style={{ backgroundColor: pkg.color }}>
                  اختر هذه الباقة
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {allFeatures.map((feature) => {
                  const featureValue = packageFeatureMap[pkg.id]?.[feature]
                  return (
                    <div key={feature} className="h-16 flex items-center justify-center border-b border-[#E5DCC8] pb-4">
                      {typeof featureValue === "boolean" ? (
                        featureValue ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-400" />
                        )
                      ) : (
                        <span className="text-[#6B4423] text-sm text-center">{featureValue || "-"}</span>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
