"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { FAQ } from "@/lib/fake-backend"

interface FAQSectionProps {
  faqs: FAQ[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(faqs.map((faq) => faq.category)))]
  const categoryLabels: { [key: string]: string } = {
    all: "الكل",
    عام: "عام",
    خدمات: "خدمات",
    باقات: "باقات",
    دفع: "دفع",
    ضمان: "ضمان",
    تقييم: "تقييم",
    اشتراك: "اشتراك",
  }

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] w-5 h-5" />
          <Input
            placeholder="ابحث في الأسئلة الشائعة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-12 border-2 border-[#EFEAD5] rounded-2xl focus:border-[#8B6914]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category
                  ? "bg-[#2D5016] text-white"
                  : "border-[#E5DCC8] text-[#6B4423] hover:border-[#8B6914]"
              }`}
            >
              {categoryLabels[category] || category}
            </Button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <Card className="bg-white border-0 rounded-3xl">
            <CardContent className="p-8 text-center">
              <p className="text-[#6B4423] text-lg">لم يتم العثور على أسئلة تطابق بحثك</p>
            </CardContent>
          </Card>
        ) : (
          filteredFAQs.map((faq) => (
            <Card key={faq.id} className="bg-white border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 sm:p-8 text-right hover:bg-[#F8F5F0] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#EFEAD5] text-[#2D5016] text-xs">
                        {categoryLabels[faq.category] || faq.category}
                      </Badge>
                      <h3 className="text-lg sm:text-xl font-bold text-[#2D5016]">{faq.question}</h3>
                    </div>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="w-6 h-6 text-[#8B6914] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#8B6914] flex-shrink-0" />
                    )}
                  </div>
                </button>

                {openItems.includes(faq.id) && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="border-t border-[#E5DCC8] pt-6">
                      <p className="text-[#6B4423] leading-relaxed text-base sm:text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Contact CTA */}
      <Card className="bg-gradient-to-r from-[#EFEAD5] to-[#E5DCC8] border-0 rounded-3xl">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-4">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-[#6B4423] mb-6 text-lg">فريقنا جاهز للإجابة على جميع استفساراتك</p>
          <Button className="bg-[#2D5016] hover:bg-[#1F3A0F] text-white px-8 py-4 text-lg font-semibold rounded-2xl">
            تواصل معنا الآن
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
