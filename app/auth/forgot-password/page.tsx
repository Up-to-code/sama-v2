"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ResponsiveHeader } from "@/components/responsive-header"
import { Bird, Mail, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    if (!email) return "البريد الإلكتروني مطلوب"
    if (!/\S+@\S+\.\S+/.test(email)) return "البريد الإلكتروني غير صحيح"
    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailError = validateEmail(email)
    if (emailError) {
      setErrors({ email: emailError })
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate password reset
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
    } catch (error) {
      setErrors({ general: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors({ ...errors, email: "" })
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] font-cairo" dir="rtl">
        <ResponsiveHeader currentPath="/auth/forgot-password" />

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-500 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D5016] mb-2">تم الإرسال بنجاح</h1>
              <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">تحقق من بريدك الإلكتروني</p>
            </div>

            <Card className="bg-white border-0 rounded-3xl shadow-lg">
              <CardContent className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 text-center">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2D5016] mb-4">
                  تحقق من بريدك الإلكتروني
                </h2>
                <p className="text-[#6B4423] mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
                  لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى:
                </p>
                <p className="text-[#8B6914] font-semibold mb-8 text-sm sm:text-base break-all">{email}</p>
                <p className="text-[#6B4423] text-xs sm:text-sm mb-8">
                  إذا لم تجد الرسالة، تحقق من مجلد الرسائل غير المرغوب فيها
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <Link href="/auth/login">
                    <Button className="w-full bg-[#2D5016] hover:bg-[#1F3A0F] text-white py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-2xl shadow-md">
                      العودة لتسجيل الدخول
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSuccess(false)
                      setEmail("")
                    }}
                    className="w-full border-2 border-[#E5DCC8] text-[#2D5016] hover:bg-[#EFEAD5] py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-2xl"
                  >
                    إرسال مرة أخرى
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] font-cairo" dir="rtl">
      <ResponsiveHeader currentPath="/auth/forgot-password" />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="max-w-md mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#2D5016] rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <Bird className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#F8F5F0]" />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D5016] mb-2">نسيت كلمة المرور؟</h1>
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">لا تقلق، سنساعدك في استعادتها</p>
          </div>

          <Card className="bg-white border-0 rounded-3xl shadow-lg">
            <CardHeader className="pb-6 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl text-[#2D5016] font-bold text-center">
                إعادة تعيين كلمة المرور
              </CardTitle>
              <CardDescription className="text-[#6B4423] text-center text-xs sm:text-sm lg:text-base">
                أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
              {errors.general && (
                <div className="flex items-center gap-3 p-3 sm:p-4 mb-6 bg-red-50 text-red-800 border border-red-200 rounded-2xl">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm">{errors.general}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="أدخل بريدك الإلكتروني"
                      className={`pr-10 sm:pr-12 border-2 text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 rounded-2xl transition-colors ${
                        errors.email ? "border-red-300 focus:border-red-500" : "border-[#EFEAD5] focus:border-[#8B6914]"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">{errors.email}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2D5016] hover:bg-[#1F3A0F] text-white py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-2xl disabled:opacity-50 transition-all shadow-md"
                >
                  {isLoading ? "جاري الإرسال..." : "إرسال رابط الإعادة"}
                  {!isLoading && <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />}
                </Button>
              </form>

              {/* Back to Login */}
              <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
                <Link
                  href="/auth/login"
                  className="text-[#8B6914] hover:text-[#2D5016] font-semibold transition-colors text-xs sm:text-sm lg:text-base"
                >
                  العودة لتسجيل الدخول
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-4 sm:mt-6 lg:mt-8">
            <Link
              href="/"
              className="inline-flex items-center text-[#6B4423] hover:text-[#2D5016] font-medium transition-colors text-xs sm:text-sm lg:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
