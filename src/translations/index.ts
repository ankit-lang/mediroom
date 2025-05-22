interface TranslationContent {
  branding: {
    name: string;
  };
  nav: {
    home: string;
    about: string;
    rooms: string;
    hospitals: string;
    testimonials: string;
    facilities: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    whatsappButton: string;
    bookButton: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    highlightTitle: string;
    highlightText: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  rooms: {
    title: string;
    subtitle: string;
    bookButton: string;
    room1: {
      name: string;
      description: string;
      features: string[];
    };
    room2: {
      name: string;
      description: string;
      features: string[];
    };
    room3: {
      name: string;
      description: string;
      features: string[];
    };
  };
  hospitals: {
    title: string;
    subtitle: string;
    specialtiesTitle: string;
    nearbyFacilitiesTitle: string;
    max: {
      distance: string;
      specialties: string;
    };
    fortis: {
      distance: string;
      specialties: string;
    };
    apollo: {
      distance: string;
      specialties: string;
    };
    facilities: {
      pharmacy: {
        name: string;
        description: string;
      };
      lab: {
        name: string;
        description: string;
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1: {
      name: string;
      country: string;
      text: string;
    };
    testimonial2: {
      name: string;
      country: string;
      text: string;
    };
    testimonial3: {
      name: string;
      country: string;
      text: string;
    };
  };
  facilities: {
    title: string;
    subtitle: string;
    specialNoticeTitle: string;
    specialNoticeText1: string;
    specialNoticeText2: string;
    feature1: {
      name: string;
      description: string;
    };
    feature2: {
      name: string;
      description: string;
    };
    feature3: {
      name: string;
      description: string;
    };
    feature4: {
      name: string;
      description: string;
    };
    feature5: {
      name: string;
      description: string;
    };
    feature6: {
      name: string;
      description: string;
    };
  };
  earlyBooking: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  booking: {
    title: string;
    subtitle: string;
    thankYou: string;
    confirmationMessage: string;
    nameLabel: string;
    countryLabel: string;
    guestsLabel: string;
    arrivalDateLabel: string;
    whatsappLabel: string;
    purposeLabel: string;
    purposeOptions: {
      medical: string;
      tourism: string;
      business: string;
      other: string;
    };
    messageLabel: string;
    submitButton: string;
    contactInfo: {
      title: string;
      address: {
        label: string;
        value: string;
      };
      phone: {
        label: string;
        value: string;
      };
      email: {
        label: string;
        value: string;
      };
      hours: {
        label: string;
        value: string;
      };
    };
  };
  location: {
    title: string;
    subtitle: string;
    fromAirport: {
      title: string;
      description: string;
      option1: string;
      option2: string;
    };
    publicTransport: {
      title: string;
      description: string;
      option1: string;
      option2: string;
    };
    parking: {
      title: string;
      description: string;
      option1: string;
      option2: string;
    };
  };
  footer: {
    about: {
      title: string;
      description: string;
    };
    quickLinks: {
      title: string;
      links: Array<{
        text: string;
        url: string;
      }>;
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
    };
    copyright: string;
    bottomLinks: Array<{
      text: string;
      url: string;
    }>;
  };
  whatsapp: {
    ariaLabel: string;
  };
}

interface Translations {
  en: TranslationContent;
  ar: TranslationContent;
}

const translations: Translations = {
  en: {
    branding: {
      name: "MediStay Delhi",
    },
    nav: {
      home: "Home",
      about: "About Us",
      rooms: "Rooms",
      hospitals: "Nearby Hospitals",
      testimonials: "Testimonials",
      facilities: "Facilities",
      contact: "Contact",
    },
    hero: {
      title: "Your Trusted Home in Delhi for Medical Treatment",
      subtitle: "Safe, comfortable accommodation close to Delhi's top hospitals, with a special focus on Middle Eastern guests.",
      whatsappButton: "WhatsApp Now",
      bookButton: "Book Your Stay",
    },
    about: {
      title: "About MediStay Delhi",
      description1: "MediStay Delhi offers a comfortable, peaceful environment for international patients and their families. We understand the stress of medical travel and have designed our accommodation to be your perfect home away from home.",
      description2: "Our specialized team is experienced in supporting medical tourists, with services tailored to patient needs including dietary requirements, hospital transportation, and multilingual assistance.",
      highlightTitle: "Why Choose Us?",
      highlightText: "We're strategically located close to Delhi's top hospitals, including Max, Fortis, and Apollo, making us the perfect choice for medical travelers seeking convenience and comfort.",
      features: [
        {
          title: "Medical Travel Expertise",
          description: "Staff trained to support medical travelers with specific needs and requirements",
        },
        {
          title: "Hospital Proximity",
          description: "Walking distance to Max Super Speciality Hospital and quick access to other medical facilities",
        },
        {
          title: "Cultural Sensitivity",
          description: "Accommodations and services tailored to Middle Eastern guests, including Arabic food options",
        },
      ],
    },
    rooms: {
      title: "Our Accommodations",
      subtitle: "Comfortable rooms designed with medical travelers in mind",
      bookButton: "Book This Room",
      room1: {
        name: "Standard Patient Room",
        description: "A comfortable space designed for patients, with medical-friendly features and all essential amenities.",
        features: [
          "Adjustable beds for patient comfort", 
          "En-suite bathroom with accessibility features", 
          "High-speed Wi-Fi", 
          "Air conditioning", 
          "Mini refrigerator for medications"
        ],
      },
      room2: {
        name: "Family Suite",
        description: "Spacious accommodation for patients traveling with family members, offering comfort for everyone.",
        features: [
          "Separate bedroom and living area", 
          "Kitchenette with basic cooking facilities", 
          "Dining area", 
          "Prayer space", 
          "Extra storage for extended stays"
        ],
      },
      room3: {
        name: "Premium Recovery Suite",
        description: "Our most comfortable option, perfect for post-treatment recovery in a peaceful environment.",
        features: [
          "Large, luxurious space with premium furnishings", 
          "Medical-grade air purification system", 
          "Hospital-style adjustable bed", 
          "Separate sitting area for visitors", 
          "24/7 staff assistance"
        ],
      },
    },
    hospitals: {
      title: "Nearby Hospitals & Medical Facilities",
      subtitle: "We're strategically located near Delhi's top medical centers",
      specialtiesTitle: "Key Specialties",
      nearbyFacilitiesTitle: "Other Nearby Medical Facilities",
      max: {
        distance: "5 minutes walking distance",
        specialties: "Oncology, Cardiology, Neurology, Orthopedics, Transplants",
      },
      fortis: {
        distance: "10 minutes by car",
        specialties: "Cardiac Sciences, Orthopedics, Neurosciences, Renal Sciences",
      },
      apollo: {
        distance: "15 minutes by car",
        specialties: "Robotic Surgery, Transplants, Cancer Treatment, Bariatric Surgery",
      },
      facilities: {
        pharmacy: {
          name: "24-Hour Pharmacy",
          description: "Multiple pharmacies within walking distance that operate around the clock for emergency medication needs.",
        },
        lab: {
          name: "Diagnostic Labs",
          description: "Several diagnostic centers for blood work, imaging, and other medical tests within 500 meters.",
        },
      },
    },
    testimonials: {
      title: "Guest Testimonials",
      subtitle: "What our guests say about their stay with us",
      testimonial1: {
        name: "Ahmed Al-Farsi",
        country: "Oman",
        text: "The team at MediStay made a difficult time much easier. The proximity to Max Hospital was perfect for my father's daily treatments, and the staff understood our needs perfectly.",
      },
      testimonial2: {
        name: "Fatima Al-Nasser",
        country: "Saudi Arabia",
        text: "As a woman traveling for medical treatment, I was concerned about comfort and safety. MediStay exceeded my expectations with their attention to detail and respect for privacy.",
      },
      testimonial3: {
        name: "Mohammed Ibrahim",
        country: "UAE",
        text: "The convenience of having Arabic food options and prayer facilities made a huge difference during our stay. The staff was incredibly helpful with hospital appointments.",
      },
    },
    facilities: {
      title: "Our Facilities & Services",
      subtitle: "Everything you need for a comfortable medical stay",
      specialNoticeTitle: "Special Assistance for Medical Travelers",
      specialNoticeText1: "We offer dedicated services for those undergoing medical treatment, including special meal preparation according to dietary restrictions, medication reminders, and assistance with hospital appointments.",
      specialNoticeText2: "Our staff can coordinate with your medical team and help with translation during doctor consultations if needed.",
      feature1: {
        name: "Specialized Meal Service",
        description: "Custom meals according to dietary restrictions and Middle Eastern cuisine on request",
      },
      feature2: {
        name: "Free High-Speed Wi-Fi",
        description: "Stay connected with family and doctors throughout your stay",
      },
      feature3: {
        name: "Wheelchair Accessibility",
        description: "Fully accessible accommodations with ramps and elevator access",
      },
      feature4: {
        name: "Airport Pickup",
        description: "Convenient transportation from the airport directly to our accommodation",
      },
      feature5: {
        name: "24/7 Reception",
        description: "Round-the-clock assistance for any needs or emergencies",
      },
      feature6: {
        name: "Medical Coordination",
        description: "Assistance with hospital appointments and medical documentation",
      },
    },
    earlyBooking: {
      title: "Early Booking Discount",
      subtitle: "Book in advance and save 15% on your stay",
      description: "Reserve your room at least 30 days before your arrival and receive a special discount, perfect for planned medical treatments.",
      button: "Book Now and Save",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    booking: {
      title: "Book Your Stay",
      subtitle: "Fill out the form below to reserve your accommodation",
      thankYou: "Thank You!",
      confirmationMessage: "Your booking request has been received. We'll contact you shortly via WhatsApp to confirm your reservation.",
      nameLabel: "Full Name",
      countryLabel: "Country",
      guestsLabel: "Number of Guests",
      arrivalDateLabel: "Arrival Date",
      whatsappLabel: "WhatsApp Number",
      purposeLabel: "Purpose of Stay",
      purposeOptions: {
        medical: "Medical Treatment",
        tourism: "Tourism",
        business: "Business",
        other: "Other",
      },
      messageLabel: "Additional Information",
      submitButton: "Submit Booking Request",
      contactInfo: {
        title: "Contact Information",
        address: {
          label: "Address",
          value: "123 Medical District, Near Max Hospital, Saket, New Delhi, India",
        },
        phone: {
          label: "Phone",
          value: "+91 123 456 7890",
        },
        email: {
          label: "Email",
          value: "info@medistaydelhi.com",
        },
        hours: {
          label: "Reception Hours",
          value: "24/7, 365 days",
        },
      },
    },
    location: {
      title: "Our Location",
      subtitle: "Strategically located near major hospitals in Delhi",
      fromAirport: {
        title: "From the Airport",
        description: "We're approximately 30 minutes from Indira Gandhi International Airport.",
        option1: "Pre-book our airport pickup service for convenience",
        option2: "Taxis and ride-sharing services are readily available",
      },
      publicTransport: {
        title: "Public Transportation",
        description: "Easily accessible via Delhi's public transportation network.",
        option1: "Metro station within 10 minutes walking distance",
        option2: "Regular bus services connecting to major city areas",
      },
      parking: {
        title: "Parking Facilities",
        description: "Parking options for guests arriving with personal vehicles.",
        option1: "Dedicated parking spaces for our guests",
        option2: "24-hour security for your vehicle",
      },
    },
    footer: {
      about: {
        title: "About Us",
        description: "MediStay Delhi provides specialized accommodation for international patients seeking medical treatment in Delhi, with a focus on comfort, convenience, and cultural sensitivity.",
      },
      quickLinks: {
        title: "Quick Links",
        links: [
          { text: "Home", url: "#" },
          { text: "About Us", url: "#about" },
          { text: "Rooms", url: "#rooms" },
          { text: "Nearby Hospitals", url: "#hospitals" },
          { text: "Book Now", url: "#booking" },
          { text: "Contact", url: "#contact" },
        ],
      },
      contact: {
        title: "Contact Us",
        address: "123 Medical District, Near Max Hospital, Saket, New Delhi, India",
        phone: "+91 123 456 7890",
        email: "info@medistaydelhi.com",
      },
      newsletter: {
        title: "Newsletter",
        description: "Subscribe to receive updates and special offers",
        placeholder: "Your Email Address",
        button: "Subscribe",
      },
      copyright: "MediStay Delhi. All rights reserved.",
      bottomLinks: [
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cancellation Policy", url: "#" },
      ],
    },
    whatsapp: {
      ariaLabel: "Contact us on WhatsApp",
    },
  },
  ar: {
    branding: {
      name: "ميديستاي دلهي",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      rooms: "الغرف",
      hospitals: "المستشفيات القريبة",
      testimonials: "آراء النزلاء",
      facilities: "المرافق",
      contact: "اتصل بنا",
    },
    hero: {
      title: "بيتك الموثوق في دلهي للعلاج الطبي",
      subtitle: "إقامة آمنة ومريحة بالقرب من أفضل مستشفيات دلهي، مع تركيز خاص على الضيوف من الشرق الأوسط.",
      whatsappButton: "تواصل عبر واتساب",
      bookButton: "احجز إقامتك",
    },
    about: {
      title: "عن ميديستاي دلهي",
      description1: "توفر ميديستاي دلهي بيئة مريحة وهادئة للمرضى الدوليين وعائلاتهم. نحن نتفهم الضغط النفسي للسفر الطبي وقد صممنا مكان إقامتنا ليكون منزلك المثالي بعيدًا عن المنزل.",
      description2: "فريقنا المتخصص لديه خبرة في دعم السياح الطبيين، مع خدمات مصممة خصيصًا لاحتياجات المرضى بما في ذلك المتطلبات الغذائية والنقل إلى المستشفى والمساعدة متعددة اللغات.",
      highlightTitle: "لماذا تختارنا؟",
      highlightText: "نحن نقع استراتيجيًا بالقرب من أفضل مستشفيات دلهي، بما في ذلك ماكس وفورتيس وأبولو، مما يجعلنا الخيار الأمثل للمسافرين الطبيين الذين يبحثون عن الراحة والملاءمة.",
      features: [
        {
          title: "خبرة في السفر الطبي",
          description: "موظفون مدربون لدعم المسافرين الطبيين ذوي الاحتياجات والمتطلبات المحددة",
        },
        {
          title: "القرب من المستشفيات",
          description: "على مسافة قريبة سيرًا على الأقدام من مستشفى ماكس التخصصي وسهولة الوصول إلى المرافق الطبية الأخرى",
        },
        {
          title: "حساسية ثقافية",
          description: "أماكن إقامة وخدمات مصممة خصيصًا للضيوف من الشرق الأوسط، بما في ذلك خيارات الطعام العربي",
        },
      ],
    },
    rooms: {
      title: "أماكن الإقامة لدينا",
      subtitle: "غرف مريحة مصممة مع وضع المسافرين الطبيين في الاعتبار",
      bookButton: "احجز هذه الغرفة",
      room1: {
        name: "غرفة المريض القياسية",
        description: "مساحة مريحة مصممة للمرضى، مع ميزات صديقة للمرضى وجميع وسائل الراحة الأساسية.",
        features: [
          "أسرّة قابلة للتعديل لراحة المريض", 
          "حمام داخلي مع ميزات سهولة الوصول", 
          "واي فاي عالي السرعة", 
          "تكييف هواء", 
          "ثلاجة صغيرة للأدوية"
        ],
      },
      room2: {
        name: "جناح عائلي",
        description: "إقامة واسعة للمرضى المسافرين مع أفراد العائلة، توفر الراحة للجميع.",
        features: [
          "غرفة نوم منفصلة ومنطقة معيشة", 
          "مطبخ صغير مع مرافق طهي أساسية", 
          "منطقة لتناول الطعام", 
          "مكان للصلاة", 
          "تخزين إضافي للإقامات الطويلة"
        ],
      },
      room3: {
        name: "جناح التعافي الفاخر",
        description: "خيارنا الأكثر راحة، مثالي للتعافي بعد العلاج في بيئة هادئة.",
        features: [
          "مساحة كبيرة وفاخرة مع أثاث متميز", 
          "نظام تنقية هواء بجودة طبية", 
          "سرير قابل للتعديل على طراز المستشفى", 
          "منطقة جلوس منفصلة للزوار", 
          "مساعدة الموظفين على مدار الساعة"
        ],
      },
    },
    hospitals: {
      title: "المستشفيات والمرافق الطبية القريبة",
      subtitle: "نحن نقع استراتيجيًا بالقرب من أفضل المراكز الطبية في دلهي",
      specialtiesTitle: "التخصصات الرئيسية",
      nearbyFacilitiesTitle: "مرافق طبية قريبة أخرى",
      max: {
        distance: "5 دقائق سيرًا على الأقدام",
        specialties: "الأورام، أمراض القلب، الأعصاب، العظام، زراعة الأعضاء",
      },
      fortis: {
        distance: "10 دقائق بالسيارة",
        specialties: "علوم القلب، العظام، علوم الأعصاب، علوم الكلى",
      },
      apollo: {
        distance: "15 دقيقة بالسيارة",
        specialties: "الجراحة الروبوتية، زراعة الأعضاء، علاج السرطان، جراحة السمنة",
      },
      facilities: {
        pharmacy: {
          name: "صيدلية تعمل على مدار 24 ساعة",
          description: "صيدليات متعددة على مسافة قريبة تعمل على مدار الساعة لاحتياجات الأدوية الطارئة.",
        },
        lab: {
          name: "مختبرات التشخيص",
          description: "العديد من مراكز التشخيص لفحوصات الدم والتصوير والاختبارات الطبية الأخرى على بعد 500 متر.",
        },
      },
    },
    testimonials: {
      title: "آراء النزلاء",
      subtitle: "ما يقوله ضيوفنا عن إقامتهم معنا",
      testimonial1: {
        name: "أحمد الفارسي",
        country: "عمان",
        text: "جعل فريق ميديستاي الوقت الصعب أسهل بكثير. كان القرب من مستشفى ماكس مثاليًا لعلاجات والدي اليومية، وفهم الموظفون احتياجاتنا بشكل مثالي.",
      },
      testimonial2: {
        name: "فاطمة الناصر",
        country: "المملكة العربية السعودية",
        text: "كامرأة مسافرة للعلاج الطبي، كنت قلقة بشأن الراحة والأمان. تجاوزت ميديستاي توقعاتي مع اهتمامهم بالتفاصيل واحترامهم للخصوصية.",
      },
      testimonial3: {
        name: "محمد إبراهيم",
        country: "الإمارات العربية المتحدة",
        text: "سهولة وجود خيارات للطعام العربي ومرافق للصلاة أحدثت فرقًا كبيرًا خلال إقامتنا. كان الموظفون مفيدين للغاية مع مواعيد المستشفى.",
      },
    },
    facilities: {
      title: "مرافقنا وخدماتنا",
      subtitle: "كل ما تحتاجه لإقامة طبية مريحة",
      specialNoticeTitle: "مساعدة خاصة للمسافرين الطبيين",
      specialNoticeText1: "نقدم خدمات مخصصة للخاضعين للعلاج الطبي، بما في ذلك إعداد وجبات خاصة وفقًا للقيود الغذائية، وتذكير بالأدوية، ومساعدة في مواعيد المستشفى.",
      specialNoticeText2: "يمكن لموظفينا التنسيق مع فريقك الطبي والمساعدة في الترجمة أثناء استشارات الطبيب إذا لزم الأمر.",
      feature1: {
        name: "خدمة وجبات متخصصة",
        description: "وجبات مخصصة وفقًا للقيود الغذائية والمطبخ الشرق أوسطي عند الطلب",
      },
      feature2: {
        name: "واي فاي مجاني عالي السرعة",
        description: "ابق على اتصال مع العائلة والأطباء طوال فترة إقامتك",
      },
      feature3: {
        name: "إمكانية الوصول بالكرسي المتحرك",
        description: "أماكن إقامة يمكن الوصول إليها بالكامل مع منحدرات ومصعد",
      },
      feature4: {
        name: "استقبال من المطار",
        description: "وسائل نقل مريحة من المطار مباشرة إلى مكان إقامتنا",
      },
      feature5: {
        name: "استقبال على مدار 24 ساعة",
        description: "مساعدة على مدار الساعة لأي احتياجات أو حالات طوارئ",
      },
      feature6: {
        name: "تنسيق طبي",
        description: "مساعدة في مواعيد المستشفى والوثائق الطبية",
      },
    },
    earlyBooking: {
      title: "خصم الحجز المبكر",
      subtitle: "احجز مسبقًا ووفر 15% على إقامتك",
      description: "احجز غرفتك قبل 30 يومًا على الأقل من وصولك واحصل على خصم خاص، مثالي للعلاجات الطبية المخطط لها.",
      button: "احجز الآن ووفر",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثواني",
    },
    booking: {
      title: "احجز إقامتك",
      subtitle: "املأ النموذج أدناه لحجز مكان إقامتك",
      thankYou: "شكراً لك!",
      confirmationMessage: "تم استلام طلب الحجز الخاص بك. سنتصل بك قريبًا عبر واتساب لتأكيد حجزك.",
      nameLabel: "الاسم الكامل",
      countryLabel: "البلد",
      guestsLabel: "عدد الضيوف",
      arrivalDateLabel: "تاريخ الوصول",
      whatsappLabel: "رقم الواتساب",
      purposeLabel: "الغرض من الإقامة",
      purposeOptions: {
        medical: "العلاج الطبي",
        tourism: "السياحة",
        business: "العمل",
        other: "أخرى",
      },
      messageLabel: "معلومات إضافية",
      submitButton: "إرسال طلب الحجز",
      contactInfo: {
        title: "معلومات الاتصال",
        address: {
          label: "العنوان",
          value: "123 المنطقة الطبية، بالقرب من مستشفى ماكس، ساكيت، نيودلهي، الهند",
        },
        phone: {
          label: "الهاتف",
          value: "+91 123 456 7890",
        },
        email: {
          label: "البريد الإلكتروني",
          value: "info@medistaydelhi.com",
        },
        hours: {
          label: "ساعات الاستقبال",
          value: "24/7، 365 يومًا",
        },
      },
    },
    location: {
      title: "موقعنا",
      subtitle: "موقع استراتيجي بالقرب من المستشفيات الرئيسية في دلهي",
      fromAirport: {
        title: "من المطار",
        description: "نحن على بعد حوالي 30 دقيقة من مطار إنديرا غاندي الدولي.",
        option1: "احجز خدمة الاستقبال من المطار مسبقًا للراحة",
        option2: "سيارات الأجرة وخدمات مشاركة الركوب متوفرة بسهولة",
      },
      publicTransport: {
        title: "وسائل النقل العام",
        description: "يسهل الوصول إليها عبر شبكة النقل العام في دلهي.",
        option1: "محطة مترو على بعد 10 دقائق سيرًا على الأقدام",
        option2: "خدمات حافلات منتظمة تربط بمناطق المدينة الرئيسية",
      },
      parking: {
        title: "مرافق وقوف السيارات",
        description: "خيارات وقوف السيارات للضيوف القادمين بسيارات شخصية.",
        option1: "أماكن وقوف سيارات مخصصة لضيوفنا",
        option2: "أمن على مدار 24 ساعة لسيارتك",
      },
    },
    footer: {
      about: {
        title: "من نحن",
        description: "توفر ميديستاي دلهي أماكن إقامة متخصصة للمرضى الدوليين الذين يبحثون عن علاج طبي في دلهي، مع التركيز على الراحة والملاءمة والحساسية الثقافية.",
      },
      quickLinks: {
        title: "روابط سريعة",
        links: [
          { text: "الرئيسية", url: "#" },
          { text: "من نحن", url: "#about" },
          { text: "الغرف", url: "#rooms" },
          { text: "المستشفيات القريبة", url: "#hospitals" },
          { text: "احجز الآن", url: "#booking" },
          { text: "اتصل بنا", url: "#contact" },
        ],
      },
      contact: {
        title: "اتصل بنا",
        address: "123 المنطقة الطبية، بالقرب من مستشفى ماكس، ساكيت، نيودلهي، الهند",
        phone: "+91 123 456 7890",
        email: "info@medistaydelhi.com",
      },
      newsletter: {
        title: "النشرة الإخبارية",
        description: "اشترك لتلقي التحديثات والعروض الخاصة",
        placeholder: "عنوان بريدك الإلكتروني",
        button: "اشترك",
      },
      copyright: "ميديستاي دلهي. جميع الحقوق محفوظة.",
      bottomLinks: [
        { text: "سياسة الخصوصية", url: "#" },
        { text: "شروط الخدمة", url: "#" },
        { text: "سياسة الإلغاء", url: "#" },
      ],
    },
    whatsapp: {
      ariaLabel: "تواصل معنا عبر واتساب",
    },
  },
};

export default translations;