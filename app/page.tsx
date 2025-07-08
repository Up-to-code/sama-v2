"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { PricingCards } from "@/components/pricing-cards"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { FAQSection } from "@/components/faq-section"
import { PricingComparison } from "@/components/pricing-comparison"
import { PackageCustomizer } from "@/components/package-customizer"
import { ResponsiveHeader } from "@/components/responsive-header"
import { ResponsiveSection } from "@/components/responsive-section"
import { MobileOptimizedCard } from "@/components/mobile-optimized-card"
import {
  Bird,
  PenTool,
  TrendingUp,
  Users,
  Award,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Camera,
  ArrowLeft,
  Star,
  Shield,
  Zap,
} from "lucide-react"
import { fakeAPI, type Package, type Testimonial, type FAQ } from "@/lib/fake-backend"
import Link from "next/link"

export default function SamaLanding() {
  const [packages, setPackages] = useState<Package[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [faqs, setFAQs] = useState<FAQ[]>([])
  const [packagesLoading, setPackagesLoading] = useState(true)
  const [testimonialsLoading, setTestimonialsLoading] = useState(true)
  const [faqsLoading, setFAQsLoading] = useState(true)
  const [showComparison, setShowComparison] = useState(false)
  const [showCustomizer, setShowCustomizer] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [packagesData, testimonialsData, faqsData] = await Promise.all([
          fakeAPI.getPackages(),
          fakeAPI.getTestimonials(),
          fakeAPI.getFAQs(),
        ])
        setPackages(packagesData)
        setTestimonials(testimonialsData)
        setFAQs(faqsData)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setPackagesLoading(false)
        setTestimonialsLoading(false)
        setFAQsLoading(false)
      }
    }

    loadData()
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F5F0] font-cairo" dir="rtl">
      <ResponsiveHeader />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-[#8B6914] rounded-3xl flex items-center justify-center shadow-lg">
                <Bird className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 text-[#F8F5F0]" />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2D5016] mb-4 sm:mb-6 lg:mb-8 leading-none">
              سَما
            </h1>

            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#8B6914] mb-3 sm:mb-4 lg:mb-6 font-semibold">
              حدودنا هي السماء
            </p>

            <div className="w-10 sm:w-12 lg:w-16 h-1 bg-[#A0522D] mx-auto mb-6 sm:mb-8 lg:mb-12 rounded-full"></div>

            <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#6B4423] mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              وكالة سعودية متخصصة في إدارة المحتوى العربي لشركات التطوير العقاري. نقدم حلولاً إبداعية تعكس الهوية
              السعودية الأصيلة وتحقق أهدافكم التسويقية بتميز واحترافية عالية.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center px-4">
              <Button
                size="lg"
                className="bg-[#2D5016] hover:bg-[#1F3A0F] text-white px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base xl:text-lg font-semibold rounded-2xl w-full sm:w-auto shadow-md"
              >
                اطلب استشارة مجانية
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />
              </Button>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#8B6914] text-[#8B6914] hover:bg-[#8B6914] hover:text-white px-4 sm:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 lg:py-6 text-xs sm:text-sm lg:text-base xl:text-lg font-semibold bg-transparent rounded-2xl w-full"
                >
                  تصفح خدماتنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <ResponsiveSection background="white" size="sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#2D5016] rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2D5016] mb-1 sm:mb-2">+٥٠</h3>
            <p className="text-[#6B4423] font-medium text-xs sm:text-sm lg:text-base">مشروع عقاري ناجح</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#8B6914] rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md">
              <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2D5016] mb-1 sm:mb-2">٩٨٪</h3>
            <p className="text-[#6B4423] font-medium text-xs sm:text-sm lg:text-base">رضا العملاء</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#A0522D] rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-md">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2D5016] mb-1 sm:mb-2">٢٤ ساعة</h3>
            <p className="text-[#6B4423] font-medium text-xs sm:text-sm lg:text-base">وقت الاستجابة</p>
          </div>
        </div>
      </ResponsiveSection>

      {/* About Section */}
      <ResponsiveSection
        id="about"
        badge="من نحن"
        title="وكالة سَما السعودية"
        description="نحن وكالة سعودية متجذرة في التراث العربي الأصيل، متخصصة في إدارة المحتوى العربي لشركات التطوير العقاري. نفهم السوق السعودي بعمق ونقدم محتوى يتحدث بلغة جمهوركم ويعكس قيمكم وطموحاتكم."
        background="muted"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <MobileOptimizedCard
            title="الخبرة السعودية"
            icon={<Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#2D5016]" />}
            className="sm:col-span-2 lg:col-span-1"
          >
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base leading-relaxed">
              فريق من الخبراء السعوديين المتخصصين في المحتوى العربي والتسويق العقاري
            </p>
          </MobileOptimizedCard>

          <MobileOptimizedCard
            title="فهم عميق للسوق"
            icon={<Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#8B6914]" />}
          >
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base leading-relaxed">
              نفهم احتياجات السوق السعودي وتطلعات المستثمرين في القطاع العقاري
            </p>
          </MobileOptimizedCard>

          <MobileOptimizedCard
            title="نتائج مضمونة"
            icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#A0522D]" />}
            className="sm:col-span-2 lg:col-span-1"
          >
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base leading-relaxed">
              نلتزم بتحقيق أهدافكم وزيادة تفاعل جمهوركم مع مشاريعكم العقارية
            </p>
          </MobileOptimizedCard>
        </div>
      </ResponsiveSection>

      {/* Services Preview */}
      <ResponsiveSection
        badge="خدماتنا"
        title="حلول متكاملة للمحتوى العقاري"
        description="نقدم مجموعة شاملة من الخدمات المتخصصة في إدارة المحتوى العربي والتسويق الرقمي للقطاع العقاري"
        background="default"
      >
        <div className="text-center mb-8 sm:mb-12">
          <Link href="/services">
            <Button className="bg-[#8B6914] hover:bg-[#6B4423] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-2xl shadow-md">
              عرض جميع الخدمات
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <MobileOptimizedCard
            title="كتابة المحتوى العقاري"
            icon={<PenTool className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#2D5016]" />}
          >
            <p className="text-[#6B4423] leading-relaxed text-xs sm:text-sm lg:text-base">
              محتوى عربي احترافي يبرز مميزات مشاريعكم العقارية ويجذب المستثمرين
            </p>
          </MobileOptimizedCard>

          <MobileOptimizedCard
            title="إدارة وسائل التواصل"
            icon={<Instagram className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#8B6914]" />}
          >
            <p className="text-[#6B4423] leading-relaxed text-xs sm:text-sm lg:text-base">
              إدارة شاملة لحساباتكم على منصات التواصل الاجتماعي بمحتوى جذاب
            </p>
          </MobileOptimizedCard>

          <MobileOptimizedCard
            title="التصوير العقاري"
            icon={<Camera className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#A0522D]" />}
            className="sm:col-span-2 lg:col-span-1"
          >
            <p className="text-[#6B4423] leading-relaxed text-xs sm:text-sm lg:text-base">
              تصوير احترافي لمشاريعكم العقارية يبرز جمالها وتميزها
            </p>
          </MobileOptimizedCard>
        </div>
      </ResponsiveSection>

      {/* Packages Section */}
      <ResponsiveSection
        id="packages"
        badge="الباقات"
        title="اختر الباقة المناسبة لمشروعك"
        description="باقات متنوعة مصممة خصيصاً لشركات التطوير العقاري في المملكة"
        background="muted"
      >
        {/* Package View Toggle */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-4">
          <Button
            variant={!showComparison && !showCustomizer ? "default" : "outline"}
            onClick={() => {
              setShowComparison(false)
              setShowCustomizer(false)
            }}
            className="rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            الباقات الأساسية
          </Button>
          <Button
            variant={showComparison ? "default" : "outline"}
            onClick={() => {
              setShowComparison(true)
              setShowCustomizer(false)
            }}
            className="rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            مقارنة الباقات
          </Button>
          <Button
            variant={showCustomizer ? "default" : "outline"}
            onClick={() => {
              setShowComparison(false)
              setShowCustomizer(true)
            }}
            className="rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            باقة مخصصة
          </Button>
        </div>

        {/* Package Views */}
        {showComparison ? (
          <PricingComparison packages={packages} />
        ) : showCustomizer ? (
          <PackageCustomizer />
        ) : (
          <PricingCards packages={packages} loading={packagesLoading} />
        )}
      </ResponsiveSection>

      {/* Testimonials Section */}
      <ResponsiveSection
        id="testimonials"
        badge="آراء العملاء"
        title="ماذا يقول عملاؤنا"
        description="تجارب حقيقية من شركات التطوير العقاري التي تعاملت معنا"
        background="default"
      >
        {testimonialsLoading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#2D5016] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Bird className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">جاري تحميل آراء العملاء...</p>
          </div>
        ) : (
          <TestimonialsCarousel testimonials={testimonials} />
        )}
      </ResponsiveSection>

      {/* FAQ Section */}
      <ResponsiveSection
        id="faq"
        badge="الأسئلة الشائعة"
        title="أجوبة لأهم الأسئلة"
        description="إجابات شاملة على الأسئلة الأكثر شيوعاً حول خدماتنا وباقاتنا"
        background="muted"
      >
        {faqsLoading ? (
          <div className="text-center py-8 sm:py-12">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#2D5016] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Bird className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
            </div>
            <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">جاري تحميل الأسئلة الشائعة...</p>
          </div>
        ) : (
          <FAQSection faqs={faqs} />
        )}
      </ResponsiveSection>

      {/* Contact Section */}
      <ResponsiveSection
        id="contact"
        badge="تواصل معنا"
        title="ابدأ رحلتك معنا اليوم"
        description="تواصل معنا للحصول على استشارة مجانية وخطة مخصصة لمشروعك العقاري"
        background="default"
      >
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <Card className="bg-white border-0 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#25D366] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-[#2D5016] mb-1">واتساب</h3>
                    <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">+966 50 123 4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#E4405F] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-[#2D5016] mb-1">إنستغرام</h3>
                    <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">@sama_agency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#8B6914] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-[#2D5016] mb-1">البريد الإلكتروني</h3>
                    <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">info@sama-agency.sa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#A0522D] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-[#2D5016] mb-1">العنوان</h3>
                    <p className="text-[#6B4423] text-xs sm:text-sm lg:text-base">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ResponsiveSection>

      {/* Footer */}
      <footer className="bg-[#2D5016] text-white py-6 sm:py-8 lg:py-12 xl:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
              <div className="sm:col-span-2">
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-[#8B6914] rounded-full flex items-center justify-center shadow-md">
                    <Bird className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">سَما</h3>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300">وكالة المحتوى المتميزة</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                  وكالة سعودية متخصصة في إدارة المحتوى العربي لشركات التطوير العقاري في المملكة العربية السعودية
                </p>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base">© ٢٠٢٤ وكالة سَما. جميع الحقوق محفوظة.</p>
              </div>

              <div>
                <h4 className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 lg:mb-6">
                  روابط سريعة
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-300">
                  <li>
                    <a href="#about" className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors">
                      من نحن
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors"
                    >
                      خدماتنا
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#packages"
                      className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors"
                    >
                      الباقات
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors"
                    >
                      تواصل معنا
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 lg:mb-6">الخدمات</h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-300">
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors"
                    >
                      كتابة المحتوى
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors"
                    >
                      إدارة وسائل التواصل
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors"
                    >
                      التصوير العقاري
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[#8B6914] text-xs sm:text-sm lg:text-base transition-colors"
                    >
                      تحسين محركات البحث
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
