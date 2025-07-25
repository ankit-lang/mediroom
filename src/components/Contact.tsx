import { useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function ContactForm() {
      const [form, setForm] = useState({
            name: "",
            email: "",
            phone: "",
            comments: "",
      });

      const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
      };

      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };

      const [captcha, setCaptcha] = useState('');
      const [captchaInput, setCaptchaInput] = useState('');
      const [captchaError, setCaptchaError] = useState('');

      // Generate a simple captcha on mount
      React.useEffect(() => {
            setCaptcha(Math.random().toString(36).substring(2, 8));
      }, []);

      const handleSubmit = (e) => {
            e.preventDefault();
            if (captchaInput !== captcha) {
                  setCaptchaError('Captcha does not match.');
                  return;
            }
            setCaptchaError('');
            console.log("Form Submitted:", form);
            // You can replace this with an API call
      };

      return (
            <>
                  <Navbar language={language} toggleLanguage={toggleLanguage} />
                  <div className="flex flex-col items-center py-10  pt-32">
                        {/* <button className="bg-[#13274F] text-white py-2 px-6 rounded mb-6">Book Now</button> */}
                        <h2 className="text-3xl font-semibold italic font-serif text-[#13274F] mb-8">Reach Out to Us</h2>

                        <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">

                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
                                    <label className="font-semibold md:text-right md:col-span-1">
                                          Phone <span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex gap-2 md:col-span-3">
                                          {/* <span className="border rounded px-4 py-2 flex items-center bg-white">🇮🇳</span> */}
                                          <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter Phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="border rounded px-4 py-2 w-full"
                                                required
                                          />
                                    </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
                                    <label className="font-semibold md:text-right  md:col-span-1">
                                          Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                          type="text"
                                          name="name"
                                          placeholder="Enter Name"
                                          value={form.name}
                                          onChange={handleChange}
                                          className="border rounded px-4 py-2 w-full md:col-span-3"
                                          required
                                    />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
                                    <label className="font-semibold md:text-right md:col-span-1">
                                          Email <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                          type="email"
                                          name="email"
                                          placeholder="Enter Email"
                                          value={form.email}
                                          onChange={handleChange}
                                          className="border rounded px-4 py-2 w-full md:col-span-3"
                                          required
                                    />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start mb-6">
                                    <label className="font-semibold md:text-right pt-2 md:col-span-1">
                                          Comments <span className="text-red-600">*</span>
                                    </label>
                                    <textarea
                                          name="comments"
                                          placeholder="Enter your message..."
                                          value={form.comments}
                                          onChange={handleChange}
                                          rows={5}
                                          className="border rounded px-4 py-2 w-full md:col-span-3"
                                          required
                                    />
                              </div>
                              {/* Captcha */}
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
                                    <label className="font-semibold md:text-right md:col-span-1">
                                          Captcha <span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex gap-2 items-center md:col-span-3">
                                          <span className="px-4 py-2 bg-gray-100 rounded font-mono tracking-widest text-lg select-none">{captcha}</span>
                                          <input
                                                type="text"
                                                name="captcha"
                                                placeholder="Enter captcha"
                                                value={captchaInput}
                                                onChange={e => setCaptchaInput(e.target.value)}
                                                className="border rounded px-4 py-2 w-full"
                                                required
                                          />
                                    </div>
                              </div>
                              {captchaError && (
                                    <div className="text-red-600 text-center mb-4">{captchaError}</div>
                              )}
                              <div className="flex justify-center">
                                    <button
                                          type="submit"
                                          className="bg-[#073937] font-bold text-white py-2 px-12 rounded hover:bg-green-600 tracking-wide transition"
                                    >
                                          Submit
                                    </button>
                              </div>
                        </form>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md m-5 ">
                        <div className="aspect-w-16 aspect-h-9">
                              <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.227882906842!2d77.26594207542283!3d28.56291897570288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3946593d9f3%3A0xba3e871d7eff20ad!2sSujan%20Mohinder%20Hospital!5e0!3m2!1sen!2sin!4v1752083282895!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                    className="rounded-lg"
                              ></iframe>
                        </div>
                  </div>
                  <WhatsAppButton language={language} />
                  <Footer language={language} />
            </>
      );
}
