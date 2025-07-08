"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, Settings } from "lucide-react"

interface CustomPackage {
  posts: number
  platforms: number
  seo: boolean
  photography: boolean
  strategy: boolean
  support24: boolean
  reports: "monthly" | "weekly" | "daily"
  dedicatedManager: boolean
}

const basePrice = 2000
const priceCalculator = {
  posts: 50, // per post
  platforms: 300, // per platform
  seo: 1500,
  photography: 2000,
  strategy: 3000,
  support24: 1000,
  reports: { monthly: 0, weekly: 500, daily: 1000 },
  dedicatedManager: 2500,
}

export function PackageCustomizer() {
  const [customPackage, setCustomPackage] = useState<CustomPackage>({
    posts: 20,
    platforms: 3,
    seo: false,
    photography: false,
    strategy: false,
    support24: false,
    reports: "monthly",
    dedicatedManager: false,
  })

  const calculatePrice = () => {
    let total = basePrice
    total += customPackage.posts * priceCalculator.posts
    total += customPackage.platforms * priceCalculator.platforms
    if (customPackage.seo) total += priceCalculator.seo
    if (customPackage.photography) total += priceCalculator.photography
    if (customPackage.strategy) total += priceCalculator.strategy
    if (customPackage.support24) total += priceCalculator.support24
    total += priceCalculator.reports[customPackage.reports]
    if (customPackage.dedicatedManager) total += priceCalculator.dedicatedManager
    return total
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="bg-white border-0 rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl text-[#2D5016] font-bold flex items-center gap-3">
            <Settings className="w-6 h-6" />
            خصص باقتك
          </CardTitle>
          <p className="text-[#6B4423]">اختر الخدمات التي تحتاجها لمشروعك</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Posts */}
          <div>
            <label className="block text-[#2D5016] font-semibold mb-3">
              عدد المنشورات الشهرية: {customPackage.posts}
            </label>
            <Slider
              value={[customPackage.posts]}
              onValueChange={(value) => setCustomPackage({ ...customPackage, posts: value[0] })}
              max={100}
              min={5}
              step={5}
              className="w-full"
            />
          </div>

          {/* Platforms */}
          <div>
            <label className="block text-[#2D5016] font-semibold mb-3">
              عدد المنصات الاجتماعية: {customPackage.platforms}
            </label>
            <Slider
              value={[customPackage.platforms]}
              onValueChange={(value) => setCustomPackage({ ...customPackage, platforms: value[0] })}
              max={8}
              min={1}
              step={1}
              className="w-full"
            />
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-[#2D5016] font-semibold">الخدمات الإضافية:</h4>

            <div className="flex items-center justify-between">
              <span className="text-[#6B4423]">تحسين محركات البحث</span>
              <Switch
                checked={customPackage.seo}
                onCheckedChange={(checked) => setCustomPackage({ ...customPackage, seo: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B4423]">التصوير العقاري</span>
              <Switch
                checked={customPackage.photography}
                onCheckedChange={(checked) => setCustomPackage({ ...customPackage, photography: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B4423]">الاستراتيجية التسويقية</span>
              <Switch
                checked={customPackage.strategy}
                onCheckedChange={(checked) => setCustomPackage({ ...customPackage, strategy: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B4423]">دعم ٢٤/٧</span>
              <Switch
                checked={customPackage.support24}
                onCheckedChange={(checked) => setCustomPackage({ ...customPackage, support24: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#6B4423]">مدير حساب مخصص</span>
              <Switch
                checked={customPackage.dedicatedManager}
                onCheckedChange={(checked) => setCustomPackage({ ...customPackage, dedicatedManager: checked })}
              />
            </div>
          </div>

          {/* Reports */}
          <div>
            <label className="block text-[#2D5016] font-semibold mb-3">تكرار التقارير:</label>
            <div className="flex gap-2">
              {(["monthly", "weekly", "daily"] as const).map((freq) => (
                <Button
                  key={freq}
                  variant={customPackage.reports === freq ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCustomPackage({ ...customPackage, reports: freq })}
                  className="rounded-full"
                >
                  {freq === "monthly" ? "شهرية" : freq === "weekly" ? "أسبوعية" : "يومية"}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Summary */}
      <Card className="bg-gradient-to-br from-[#2D5016] to-[#1F3A0F] text-white rounded-3xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">ملخص الباقة المخصصة</CardTitle>
          <p className="text-gray-200">باقة مصممة خصيصاً لاحتياجاتك</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{calculatePrice().toLocaleString()} ر.س</div>
            <p className="text-gray-300">شهرياً</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>{customPackage.posts} منشور شهرياً</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>إدارة {customPackage.platforms} منصات اجتماعية</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>
                تقارير{" "}
                {customPackage.reports === "monthly"
                  ? "شهرية"
                  : customPackage.reports === "weekly"
                    ? "أسبوعية"
                    : "يومية"}
              </span>
            </div>
            {customPackage.seo && (
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>تحسين محركات البحث</span>
              </div>
            )}
            {customPackage.photography && (
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>التصوير العقاري</span>
              </div>
            )}
            {customPackage.strategy && (
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>الاستراتيجية التسويقية</span>
              </div>
            )}
            {customPackage.support24 && (
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>دعم ٢٤/٧</span>
              </div>
            )}
            {customPackage.dedicatedManager && (
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>مدير حساب مخصص</span>
              </div>
            )}
          </div>

          <Button className="w-full bg-white text-[#2D5016] hover:bg-gray-100 py-4 text-lg font-semibold rounded-2xl">
            اطلب هذه الباقة المخصصة
          </Button>

          <div className="text-center">
            <Badge className="bg-[#8B6914] text-white">✨ استشارة مجانية لمدة ساعة</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
