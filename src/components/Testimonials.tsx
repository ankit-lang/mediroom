import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import translations from '../translations';

interface TestimonialsProps {
  language: 'en' | 'ar';
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const testimonials = [
    {
      id: 1,
      name: t.testimonials.testimonial1.name,
      country: t.testimonials.testimonial1.country,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      rating: 5,
      text: t.testimonials.testimonial1.text,
    },
    {
      id: 2,
      name: t.testimonials.testimonial2.name,
      country: t.testimonials.testimonial2.country,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      rating: 5,
      text: t.testimonials.testimonial2.text,
    },
    {
      id: 3,
      name: t.testimonials.testimonial3.name,
      country: t.testimonials.testimonial3.country,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      rating: 4,
      text: t.testimonials.testimonial3.text,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className={` font-serif section-padding bg-beige ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-center">{t.testimonials.title}</h2>
        <p className="section-subtitle text-center mb-12">{t.testimonials.subtitle}</p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={`${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-300'
                                }`}
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-text-light">{testimonial.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-beige transition-custom"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-olive" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-beige transition-custom"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-olive" />
          </button>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-olive w-6' : 'bg-gold opacity-50'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;