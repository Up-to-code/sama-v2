"use client"

import { Button } from "@/components/ui/button"
import { MobileDrawer } from "@/components/mobile-drawer"
import { Bird } from "lucide-react"
import Link from "next/link"

interface ResponsiveHeaderProps {
  currentPath?: string
}

export function ResponsiveHeader({ currentPath = "/" }: ResponsiveHeaderProps) {
  const navigationItems = [
    { href: "#about", label: "من نحن" },
    { href: "/services", label: "خدماتنا" },
    { href: "#packages", label: "الباقات" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#contact", label: "تواصل معنا" },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5F0]/95 backdrop-blur-sm border-b border-[#E5DCC8]/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-[#2D5016] rounded-2xl flex items-center justify-center shadow-md">
              <Bird className="w-4 h-4 sm:w-5 sm:h-5 text-[#F8F5F0]" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D5016] leading-tight">سَما</h1>
              <p className="text-xs text-[#8B6914] font-medium -mt-1 hidden sm:block">وكالة المحتوى المتميزة</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navigationItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#2D5016] hover:text-[#8B6914] font-medium text-sm transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[#2D5016] hover:text-[#8B6914] font-medium text-sm transition-colors duration-200"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button className="hidden sm:flex bg-[#2D5016] hover:bg-[#1F3A0F] text-white font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-2xl shadow-md transition-all duration-200">
              <span className="hidden md:inline">اطلب استشارة مجانية</span>
              <span className="md:hidden">استشارة</span>
            </Button>
            <MobileDrawer currentPath={currentPath} />
          </div>
        </nav>
      </div>
    </header>
  )
}
