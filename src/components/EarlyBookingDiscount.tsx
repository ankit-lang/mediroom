import React, { useState, useEffect } from 'react';
import translations from '../translations';

interface EarlyBookingDiscountProps {
  language: 'en' | 'ar';
}

const EarlyBookingDiscount: React.FC<EarlyBookingDiscountProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  // Set end date for the countdown (30 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white text-olive text-2xl md:text-3xl font-bold rounded-lg w-16 h-16 flex items-center justify-center mb-2">
        {value}
      </div>
      <span className="text-white text-sm">{label}</span>
    </div>
  );

  return (
    <section className={`py-16 ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-olive to-gold rounded-lg p-8 md:p-12 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {t.earlyBooking.title}
            </h2>
            <p className="text-xl md:text-2xl text-center mb-8">
              {t.earlyBooking.subtitle}
            </p>

            <div className="flex justify-center space-x-4 md:space-x-8 mb-8">
              <CountdownUnit value={timeLeft.days} label={t.earlyBooking.days} />
              <CountdownUnit value={timeLeft.hours} label={t.earlyBooking.hours} />
              <CountdownUnit value={timeLeft.minutes} label={t.earlyBooking.minutes} />
              <CountdownUnit value={timeLeft.seconds} label={t.earlyBooking.seconds} />
            </div>

            <div className="text-center">
              <p className="text-lg mb-6">{t.earlyBooking.description}</p>
              <a
                href="#booking"
                className="inline-block bg-[#193053]  font-bold py-3 px-8 rounded-lg hover:bg-beige transition-custom"
              >
                {t.earlyBooking.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyBookingDiscount;