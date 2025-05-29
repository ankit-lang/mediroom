import React, { useState } from 'react';
import translations from '../translations';

interface BookingFormProps {
  language: 'en' | 'ar';
}

const BookingForm: React.FC<BookingFormProps> = ({ language }) => {
  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    guests: '',
    arrivalDate: '',
    whatsapp: '',
    purpose: 'medical',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        country: '',
        guests: '',
        arrivalDate: '',
        whatsapp: '',
        purpose: 'medical',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="booking" className={` font-poppins section-padding  bg-[#f4f9ff] ${dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-center font-serif">{t.booking.title}</h2>
        <p className="section-subtitle text-center md:mb-12 text-[15px] md:text-lg font-serif">{t.booking.subtitle}</p>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mb-4 text-5xl">✓</div>
                  <h3 className="text-2xl font-semibold text-olive mb-2">
                    {t.booking.thankYou}
                  </h3>
                  <p>{t.booking.confirmationMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-text-dark mb-2">
                      {t.booking.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="country" className="block text-text-dark mb-2">
                      {t.booking.countryLabel}
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="guests" className="block text-text-dark mb-2">
                        {t.booking.guestsLabel}
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="arrivalDate" className="block text-text-dark mb-2">
                        {t.booking.arrivalDateLabel}
                      </label>
                      <input
                        type="date"
                        id="arrivalDate"
                        name="arrivalDate"
                        required
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="whatsapp" className="block text-text-dark mb-2">
                      {t.booking.whatsappLabel}
                    </label>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="purpose" className="block text-text-dark mb-2">
                      {t.booking.purposeLabel}
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      required
                      value={formData.purpose}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="medical">{t.booking.purposeOptions.medical}</option>
                      <option value="tourism">{t.booking.purposeOptions.tourism}</option>
                      <option value="business">{t.booking.purposeOptions.business}</option>
                      <option value="other">{t.booking.purposeOptions.other}</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-text-dark mb-2">
                      {t.booking.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary bg-[#193053] w-full">
                    {t.booking.submitButton}
                  </button>
                </form>
              )}
            </div>

            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/4046187/pexels-photo-4046187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" }}
            >
              <div className="h-full bg-[#193053] font-serif text-white p-8 bg-opacity-80 p-8 flex flex-col justify-center">
                <div className="text-2xl font-semibold text-white mb-6" style={{ color: 'white  ' }} >
                  {t.booking.contactInfo.title}
                </div>
                <div className="space-y-4 text-white">
                  <div>
                    <p className="font-semibold">{t.booking.contactInfo.address.label}</p>
                    <p>{t.booking.contactInfo.address.value}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{t.booking.contactInfo.phone.label}</p>
                    <p>{t.booking.contactInfo.phone.value}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{t.booking.contactInfo.email.label}</p>
                    <p>info@moydom.in</p>
                  </div>
                  <div>
                    <p className="font-semibold">{t.booking.contactInfo.hours.label}</p>
                    <p>{t.booking.contactInfo.hours.value}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;