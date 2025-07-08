// Fake backend simulation for demonstration purposes
export interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  message: string
  timestamp: Date
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

export interface Package {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  color: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  position: string
  content: string
  rating: number
  image?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

// Simulated data storage
const contactSubmissions: ContactForm[] = []

// Services data
export const services: Service[] = [
  {
    id: "content-writing",
    title: "كتابة المحتوى العقاري",
    description: "محتوى عربي احترافي يبرز مميزات مشاريعكم العقارية ويجذب المستثمرين والعملاء المحتملين",
    icon: "PenTool",
    features: [
      "كتابة وصف المشاريع العقارية",
      "محتوى تسويقي للمنصات الرقمية",
      "نصوص إعلانية جذابة",
      "مراجعة وتحرير المحتوى",
      "تحسين المحتوى لمحركات البحث",
    ],
    price: "يبدأ من ١,٥٠٠ ر.س",
  },
  {
    id: "social-media",
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "إدارة شاملة لحساباتكم على منصات التواصل الاجتماعي بمحتوى جذاب ومتفاعل",
    icon: "Instagram",
    features: [
      "إدارة حسابات إنستغرام وتويتر",
      "تصميم المنشورات والقصص",
      "جدولة المحتوى والنشر",
      "التفاعل مع الجمهور",
      "تقارير الأداء الشهرية",
    ],
    price: "يبدأ من ٢,٠٠٠ ر.س",
  },
  {
    id: "photography",
    title: "التصوير العقاري",
    description: "تصوير احترافي لمشاريعكم العقارية يبرز جمالها وتميزها بأعلى جودة",
    icon: "Camera",
    features: [
      "تصوير المشاريع السكنية والتجارية",
      "تصوير جوي بالطائرات المسيرة",
      "تصوير الوحدات النموذجية",
      "معالجة وتحرير الصور",
      "جولات افتراضية ثلاثية الأبعاد",
    ],
    price: "يبدأ من ٣,٠٠٠ ر.س",
  },
  {
    id: "seo",
    title: "تحسين محركات البحث",
    description: "تحسين ظهور مشاريعكم في نتائج البحث العربية والسعودية لزيادة الوصول",
    icon: "Search",
    features: [
      "تحليل الكلمات المفتاحية",
      "تحسين المحتوى للبحث",
      "بناء الروابط الخارجية",
      "تحسين سرعة الموقع",
      "تقارير الأداء والترتيب",
    ],
    price: "يبدأ من ٢,٥٠٠ ر.س",
  },
  {
    id: "analytics",
    title: "التحليل والتقارير",
    description: "تقارير تفصيلية عن أداء حملاتكم التسويقية ومعدلات التفاعل والنتائج",
    icon: "BarChart3",
    features: [
      "تحليل أداء المنصات الرقمية",
      "قياس معدلات التفاعل",
      "تتبع التحويلات والمبيعات",
      "تقارير شهرية مفصلة",
      "توصيات للتحسين",
    ],
    price: "يبدأ من ١,٠٠٠ ر.س",
  },
  {
    id: "strategy",
    title: "الاستراتيجية التسويقية",
    description: "وضع خطط تسويقية مدروسة تحقق أهدافكم في السوق العقاري السعودي",
    icon: "Target",
    features: [
      "دراسة السوق والمنافسين",
      "وضع الخطة التسويقية",
      "تحديد الجمهور المستهدف",
      "اختيار القنوات المناسبة",
      "متابعة تنفيذ الاستراتيجية",
    ],
    price: "يبدأ من ٥,٠٠٠ ر.س",
  },
]

// Packages data
export const packages: Package[] = [
  {
    id: "basic",
    name: "أساس",
    price: "٣,٥٠٠",
    period: "شهرياً",
    description: "مثالية للمشاريع الصغيرة والمتوسطة",
    color: "#8B6914",
    features: [
      "١٥ منشوراً شهرياً",
      "إدارة ٣ منصات اجتماعية",
      "تقرير شهري مفصل",
      "دعم فني متخصص",
      "كتابة المحتوى الأساسي",
    ],
  },
  {
    id: "professional",
    name: "مخطط",
    price: "٦,٥٠٠",
    period: "شهرياً",
    description: "الأنسب للمشاريع الكبيرة والمتطورة",
    color: "#2D5016",
    popular: true,
    features: [
      "٣٠ منشوراً شهرياً",
      "إدارة جميع المنصات",
      "تحسين محركات البحث",
      "تقارير أسبوعية تفصيلية",
      "جلسة تصوير شهرية",
      "استراتيجية تسويقية",
    ],
  },
  {
    id: "enterprise",
    name: "تملّك",
    price: "١٢,٠٠٠",
    period: "شهرياً",
    description: "للمطورين الكبار والمشاريع الضخمة",
    color: "#A0522D",
    features: [
      "محتوى غير محدود",
      "فريق مخصص لمشروعك",
      "استراتيجية تسويقية شاملة",
      "مدير حساب مخصص",
      "دعم فني ٢٤/٧",
      "تقارير يومية",
      "جلسات تصوير أسبوعية",
    ],
  },
]

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "أحمد العتيبي",
    company: "مجموعة العتيبي العقارية",
    position: "المدير التنفيذي",
    content:
      "تعاملنا مع وكالة سَما لأكثر من عامين، وقد حققوا نتائج مذهلة في تسويق مشاريعنا العقارية. فريق محترف ومتفهم لاحتياجات السوق السعودي.",
    rating: 5,
  },
  {
    id: "2",
    name: "فاطمة الزهراني",
    company: "شركة الزهراني للتطوير",
    position: "مديرة التسويق",
    content:
      "المحتوى الذي ينتجونه يعكس هويتنا السعودية بشكل رائع. زاد التفاعل مع مشاريعنا بنسبة ٨٥٪ خلال ستة أشهر فقط.",
    rating: 5,
  },
  {
    id: "3",
    name: "محمد الراشد",
    company: "مؤسسة الراشد العقارية",
    position: "مالك الشركة",
    content: "خدمة عملاء ممتازة واستجابة سريعة. يفهمون متطلبات السوق العقاري السعودي ويقدمون حلول إبداعية مناسبة.",
    rating: 5,
  },
  {
    id: "4",
    name: "سارة القحطاني",
    company: "مجموعة القحطاني الاستثمارية",
    position: "مديرة المشاريع",
    content: "التصوير العقاري الذي يقدمونه احترافي جداً، والمحتوى المكتوب يجذب العملاء المستهدفين بفعالية عالية.",
    rating: 4,
  },
  {
    id: "5",
    name: "عبدالله السعيد",
    company: "شركة السعيد للاستثمار العقاري",
    position: "نائب الرئيس التنفيذي",
    content: "شراكة استراتيجية ناجحة. ساعدونا في بناء حضور قوي على وسائل التواصل الاجتماعي وزيادة المبيعات بشكل ملحوظ.",
    rating: 5,
  },
]

// FAQ data
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "ما هي الخدمات التي تقدمها وكالة سَما؟",
    answer:
      "نقدم مجموعة شاملة من الخدمات تشمل كتابة المحتوى العقاري، إدارة وسائل التواصل الاجتماعي، التصوير العقاري، تحسين محركات البحث، التحليل والتقارير، ووضع الاستراتيجيات التسويقية المتخصصة للقطاع العقاري.",
    category: "عام",
  },
  {
    id: "2",
    question: "كم تستغرق مدة تنفيذ المشروع؟",
    answer:
      "تختلف مدة التنفيذ حسب نوع الخدمة وحجم المشروع. عادة ما نبدأ العمل خلال ٤٨ ساعة من توقيع العقد، والخدمات الشهرية مثل إدارة وسائل التواصل تبدأ فوراً.",
    category: "خدمات",
  },
  {
    id: "3",
    question: "هل تقدمون خدمات مخصصة خارج الباقات المعروضة؟",
    answer:
      "نعم، نقدم حلول مخصصة تماماً لتناسب احتياجات مشروعك الخاص. يمكننا تصميم باقة خاصة تجمع بين عدة خدمات بأسعار تنافسية.",
    category: "باقات",
  },
  {
    id: "4",
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل التحويل البنكي، الشيكات، والدفع الإلكتروني. يمكن الدفع شهرياً أو ربع سنوي أو سنوي مع خصومات خاصة للدفع المقدم.",
    category: "دفع",
  },
  {
    id: "5",
    question: "هل تقدمون ضمان على جودة الخدمة؟",
    answer:
      "نعم، نقدم ضمان استرداد كامل خلال أول ٣٠ يوم إذا لم تكن راضياً عن جودة خدماتنا. كما نلتزم بمعايير جودة عالية في جميع أعمالنا.",
    category: "ضمان",
  },
  {
    id: "6",
    question: "كيف تقيسون نجاح الحملات التسويقية؟",
    answer:
      "نستخدم مؤشرات أداء محددة مثل معدل التفاعل، الوصول، التحويلات، وزيادة المبيعات. نقدم تقارير دورية مفصلة تُظهر النتائج والتحسينات المطلوبة.",
    category: "تقييم",
  },
  {
    id: "7",
    question: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
    answer: "نعم، يمكنك إلغاء الاشتراك مع إشعار مسبق ٣٠ يوم. لا توجد رسوم إلغاء، ونحترم قرار عملائنا دائماً.",
    category: "اشتراك",
  },
  {
    id: "8",
    question: "هل تعملون مع شركات خارج المملكة العربية السعودية؟",
    answer:
      "تركيزنا الأساسي على السوق السعودي، لكننا نخدم أيضاً شركات في دول الخليج العربي التي تستهدف السوق السعودي أو تتطلب محتوى عربي متخصص.",
    category: "عام",
  },
]

// Fake API functions
export const fakeAPI = {
  // Submit contact form
  submitContact: async (formData: Omit<ContactForm, "timestamp">): Promise<{ success: boolean; message: string }> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate validation
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "يرجى ملء جميع الحقول المطلوبة",
      }
    }

    // Add to fake storage
    contactSubmissions.push({
      ...formData,
      timestamp: new Date(),
    })

    return {
      success: true,
      message: "تم إرسال رسالتك بنجاح. سنتواصل معك خلال ٢٤ ساعة",
    }
  },

  // Get services
  getServices: async (): Promise<Service[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return services
  },

  // Get packages
  getPackages: async (): Promise<Package[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return packages
  },

  // Get testimonials
  getTestimonials: async (): Promise<Testimonial[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return testimonials
  },

  // Get FAQs
  getFAQs: async (): Promise<FAQ[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return faqs
  },

  // Get contact submissions (for demo purposes)
  getContactSubmissions: async (): Promise<ContactForm[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return contactSubmissions
  },
}
