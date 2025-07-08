"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import type { Testimonial } from "@/lib/fake-backend"

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length, isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  if (!testimonials.length) return null

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${currentIndex * -100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="bg-white border-0 rounded-3xl mx-2">
                <CardContent className="p-8 sm:p-12 text-center">
                  <Quote className="w-12 h-12 text-[#8B6914] mx-auto mb-6 opacity-50" />

                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg sm:text-xl text-[#6B4423] mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="border-t border-[#E5DCC8] pt-6">
                    <h4 className="text-xl font-bold text-[#2D5016] mb-2">{testimonial.name}</h4>
                    <p className="text-[#8B6914] font-semibold mb-1">{testimonial.position}</p>
                    <p className="text-[#6B4423]">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="rounded-full w-12 h-12 border-2 border-[#E5DCC8] hover:border-[#8B6914] bg-transparent"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#2D5016]" : "bg-[#E5DCC8]"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="rounded-full w-12 h-12 border-2 border-[#E5DCC8] hover:border-[#8B6914] bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-[#6B4423] hover:text-[#2D5016] transition-colors"
        >
          {isAutoPlaying ? "إيقاف التشغيل التلقائي" : "تشغيل تلقائي"}
        </button>
      </div>
    </div>
  )
}
