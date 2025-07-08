"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ResponsiveHeader } from "@/components/responsive-header"
import { Bird, Eye, EyeOff, Mail, Lock, User, Building, Phone, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "الاسم يجب أن يكون حرفين على الأقل"
    }

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح"
    }

    if (formData.phone && !/^(\+966|0)?[5][0-9]{8}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "رقم الهاتف غير صحيح"
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة"
    } else if (formData.password.length < 8) {
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة"
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
      // Simulate registration
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // Handle successful registration
    } catch (error) {
      setErrors({ general: "حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى." })
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

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "" }
    if (password.length < 6) return { strength: 1, label: "ضعيفة", color: "text-red-500" }
    if (password.length < 8) return { strength: 2, label: "متوسطة", color: "text-yellow-500" }
    if (password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return { strength: 4, label: "قوية جداً", color: "text-green-600" }
    }
    return { strength: 3, label: "جيدة", color: "text-green-500" }
  }

  const passwordStrength = getPasswordStrength(formData.password)

  return (
    <div className="min-h-screen bg-[#F8F5F0] font-cairo" dir="rtl">
      <ResponsiveHeader currentPath="/auth/register" />

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="max-w-md mx-auto">
          {/* Logo Section */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#2D5016] rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <Bird className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#F8F5F0]" />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D5016] mb-2">انضم إلى سَما</h1>
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">أنشئ حسابك واستمتع بخدماتنا المتميزة</p>
          </div>

          <Card className="bg-white border-0 rounded-3xl shadow-lg">
            <CardHeader className="pb-6 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl text-[#2D5016] font-bold text-center">
                إنشاء حساب جديد
              </CardTitle>
              <CardDescription className="text-[#6B4423] text-center text-xs sm:text-sm lg:text-base">
                املأ البيانات التالية لإنشاء حسابك
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
                {/* Name Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    الاسم الكامل *
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      className={`pr-10 sm:pr-12 border-2 text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 rounded-2xl transition-colors ${
                        errors.name ? "border-red-300 focus:border-red-500" : "border-[#EFEAD5] focus:border-[#8B6914]"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    البريد الإلكتروني *
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

                {/* Phone Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 50 123 4567"
                      className={`pr-10 sm:pr-12 border-2 text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 rounded-2xl transition-colors ${
                        errors.phone ? "border-red-300 focus:border-red-500" : "border-[#EFEAD5] focus:border-[#8B6914]"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">{errors.phone}</p>}
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    اسم الشركة
                  </label>
                  <div className="relative">
                    <Building className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="أدخل اسم شركتك"
                      className="pr-10 sm:pr-12 border-2 border-[#EFEAD5] text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 rounded-2xl focus:border-[#8B6914] transition-colors"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    كلمة المرور *
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
                  {formData.password && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-1">
                        <div
                          className={`h-1 rounded-full transition-all duration-300 ${
                            passwordStrength.strength === 1
                              ? "w-1/4 bg-red-500"
                              : passwordStrength.strength === 2
                                ? "w-2/4 bg-yellow-500"
                                : passwordStrength.strength === 3
                                  ? "w-3/4 bg-green-500"
                                  : passwordStrength.strength === 4
                                    ? "w-full bg-green-600"
                                    : "w-0"
                          }`}
                        />
                      </div>
                      <span className={`text-xs ${passwordStrength.color}`}>{passwordStrength.label}</span>
                    </div>
                  )}
                  {errors.password && <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">{errors.password}</p>}
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-semibold text-[#2D5016] mb-2 sm:mb-3">
                    تأكيد كلمة المرور *
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] w-4 h-4 sm:w-5 sm:h-5" />
                    <Input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="أعد إدخال كلمة المرور"
                      className={`pr-10 sm:pr-12 pl-10 sm:pl-12 border-2 text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 rounded-2xl transition-colors ${
                        errors.confirmPassword
                          ? "border-red-300 focus:border-red-500"
                          : "border-[#EFEAD5] focus:border-[#8B6914]"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B4423] hover:text-[#2D5016] transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-green-600">كلمة المرور متطابقة</span>
                    </div>
                  )}
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-xs sm:text-sm mt-1 sm:mt-2">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2D5016] hover:bg-[#1F3A0F] text-white py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-2xl disabled:opacity-50 transition-all shadow-md"
                >
                  {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
                  {!isLoading && <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />}
                </Button>
              </form>

              {/* Login Link */}
              <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
                <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">
                  لديك حساب بالفعل؟{" "}
                  <Link
                    href="/auth/login"
                    className="text-[#8B6914] hover:text-[#2D5016] font-semibold transition-colors"
                  >
                    تسجيل الدخول
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
