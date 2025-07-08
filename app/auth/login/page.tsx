"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ResponsiveHeader } from "@/components/responsive-header"
import { Bird, Eye, EyeOff, Mail, Lock, ArrowLeft, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate login
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Handle successful login
    } catch (error) {
      setErrors({ general: "حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] font-cairo" dir="rtl">
      <ResponsiveHeader currentPath="/auth/login" />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="max-w-md mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#2D5016] rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <Bird className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#F8F5F0]" />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D5016] mb-2">مرحباً بعودتك</h1>
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">سجل دخولك للوصول إلى حسابك</p>
          </div>

          <Card className="bg-white border-0 rounded-3xl shadow-lg">
            <CardHeader className="pb-6 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl text-[#2D5016] font-bold text-center">
                تسجيل الدخول
              </CardTitle>
              <CardDescription className="text-[#6B4423] text-center text-xs sm:text-sm lg:text-base">
                أدخل بياناتك للدخول إلى حسابك
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="أدخل بريدك الإلكتروني"
                      className={`pr-10 sm:pr-12 border-2 text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 rounded-2xl transition-colors ${
                        errors.email ? "border-red-300 focus:border-red-500" : "border-[#EFEAD5] focus:border-[#8B6914]"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">{errors.email}</p>}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="أدخل كلمة المرور"
                      className={`pr-10 sm:pr-12 pl-10 sm:pl-12 border-2 text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 rounded-2xl transition-colors ${
                        errors.password
                          ? "border-red-300 focus:border-red-500"
                          : "border-[#EFEAD5] focus:border-[#8B6914]"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] hover:text-[#2D5016] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">{errors.password}</p>}
                </div>

                {/* Forgot Password */}
                <div className="text-left">
                  <Link
                    href="/auth/forgot-password"
                    className="text-xs sm:text-sm text-[#8B6914] hover:text-[#2D5016] font-medium transition-colors"
                  >
                    نسيت كلمة المرور؟
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2D5016] hover:bg-[#1F3A0F] text-white py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-2xl disabled:opacity-50 transition-all shadow-md"
                >
                  {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                  {!isLoading && <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />}
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
                <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">
                  ليس لديك حساب؟{" "}
                  <Link
                    href="/auth/register"
                    className="text-[#8B6914] hover:text-[#2D5016] font-semibold transition-colors"
                  >
                    إنشاء حساب جديد
                  </Link>
                </p>
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
