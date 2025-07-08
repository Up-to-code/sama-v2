"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { fakeAPI } from "@/lib/fake-backend"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await fakeAPI.submitContact(formData)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="bg-white border-0 rounded-3xl">
      <CardHeader className="pb-6 pt-8 px-6 sm:px-8">
        <CardTitle className="text-2xl sm:text-3xl text-[#2D5016] font-bold">أرسل لنا رسالة</CardTitle>
        <CardDescription className="text-[#6B4423] text-base sm:text-lg font-medium">
          سنتواصل معك خلال ٢٤ ساعة
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 sm:px-8 pb-8">
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-base sm:text-lg font-semibold text-[#2D5016] mb-3">الاسم *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="اسمك الكامل"
                required
                className="border-2 border-[#EFEAD5] text-base py-3 rounded-2xl focus:border-[#8B6914] focus-ring transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-base sm:text-lg font-semibold text-[#2D5016] mb-3">
                البريد الإلكتروني *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
                className="border-2 border-[#EFEAD5] text-base py-3 rounded-2xl focus:border-[#8B6914] focus-ring transition-all duration-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-base sm:text-lg font-semibold text-[#2D5016] mb-3">رقم الهاتف</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+966 50 123 4567"
              className="border-2 border-[#EFEAD5] text-base py-3 rounded-2xl focus:border-[#8B6914] focus-ring transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg font-semibold text-[#2D5016] mb-3">اسم الشركة</label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="اسم شركتك"
              className="border-2 border-[#EFEAD5] text-base py-3 rounded-2xl focus:border-[#8B6914] focus-ring transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg font-semibold text-[#2D5016] mb-3">الرسالة *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="أخبرنا عن مشروعك واحتياجاتك..."
              required
              className="border-2 border-[#EFEAD5] min-h-[120px] text-base rounded-2xl focus:border-[#8B6914] focus-ring transition-all duration-200"
            />
          </div>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-3 p-4 rounded-2xl ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <p className="text-sm sm:text-base">{submitStatus.message}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-white py-4 text-base font-semibold rounded-2xl disabled:opacity-50 focus-ring"
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
            {!isSubmitting && <ArrowLeft className="w-5 h-5 mr-2" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
