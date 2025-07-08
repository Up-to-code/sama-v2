"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Bird, Menu, Home, Briefcase, Package, MessageSquare, HelpCircle, Phone, ArrowLeft, X } from "lucide-react"
import Link from "next/link"

interface MobileDrawerProps {
  currentPath?: string
}

export function MobileDrawer({ currentPath = "/" }: MobileDrawerProps) {
  const [open, setOpen] = useState(false)

  const navigationItems = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "#about", label: "من نحن", icon: Briefcase },
    { href: "/services", label: "خدماتنا", icon: Briefcase },
    { href: "#packages", label: "الباقات", icon: Package },
    { href: "#testimonials", label: "آراء العملاء", icon: MessageSquare },
    { href: "#faq", label: "الأسئلة الشائعة", icon: HelpCircle },
    { href: "#contact", label: "تواصل معنا", icon: Phone },
  ]

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href.startsWith("#")) {
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden p-2 text-[#2D5016] hover:bg-[#EFEAD5]">
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="sr-only">فتح القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white border-l border-[#E5DCC8] p-0">
        <SheetHeader className="text-right p-4 sm:p-6 border-b border-[#E5DCC8]">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
              className="p-2 text-[#6B4423] hover:bg-[#EFEAD5] rounded-full"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <div className="flex items-center gap-2 sm:gap-3">
              <div>
                <SheetTitle className="text-lg sm:text-xl font-bold text-[#2D5016] leading-tight">سَما</SheetTitle>
                <p className="text-xs text-[#8B6914] font-medium">وكالة المحتوى المتميزة</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2D5016] rounded-2xl flex items-center justify-center">
                <Bird className="w-4 h-4 sm:w-5 sm:h-5 text-[#F8F5F0]" />
              </div>
            </div>
          </div>
        </SheetHeader>

        <div className="p-4 sm:p-6">
          <nav className="space-y-1 sm:space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              const isExternal = item.href.startsWith("/")
              const isActive = currentPath === item.href

              return isExternal ? (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  <div
                    className={`flex items-center gap-3 sm:gap-4 p-3 rounded-2xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#2D5016] text-white shadow-md"
                        : "text-[#2D5016] hover:bg-[#EFEAD5] active:bg-[#E5DCC8]"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium text-sm flex-1">{item.label}</span>
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                  </div>
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full flex items-center gap-3 sm:gap-4 p-3 rounded-2xl text-[#2D5016] hover:bg-[#EFEAD5] active:bg-[#E5DCC8] transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium text-sm flex-1">{item.label}</span>
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                </button>
              )
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#E5DCC8]">
            <Button className="w-full bg-[#2D5016] hover:bg-[#1F3A0F] text-white font-semibold py-3 text-sm rounded-2xl shadow-md">
              اطلب استشارة مجانية
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-[#6B4423] mb-2">تواصل معنا مباشرة</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-full border-[#E5DCC8] bg-transparent text-xs hover:bg-[#EFEAD5]"
              >
                واتساب
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-full border-[#E5DCC8] bg-transparent text-xs hover:bg-[#EFEAD5]"
              >
                اتصال
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
