import { useState } from "react";
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

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form Submitted:", form);
            // You can replace this with an API call
      };
      const [language, setLanguage] = useState<'en' | 'ar'>('en');

      const toggleLanguage = () => {

      };

      return (
            <>
                  <Navbar language={language} toggleLanguage={toggleLanguage} />
                  <div className="flex flex-col items-center py-10 bg-blue-50 pt-32">
                        {/* <button className="bg-[#13274F] text-white py-2 px-6 rounded mb-6">Book Now</button> */}
                        <h2 className="text-3xl font-semibold italic font-serif text-[#13274F] mb-8">Reach Out to Us</h2>

                        <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
                                    <label className="font-semibold md:text-right  md:col-span-1">Name</label>
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
                                    <label className="font-semibold md:text-right md:col-span-1">Email</label>
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

                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
                                    <label className="font-semibold md:text-right md:col-span-1">Phone</label>
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

                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start mb-6">
                                    <label className="font-semibold md:text-right pt-2 md:col-span-1">Comments</label>
                                    <textarea
                                          name="comments"
                                          placeholder="Enter your message..."
                                          value={form.comments}
                                          onChange={handleChange}
                                          rows={5}
                                          className="border rounded px-4 py-2 w-full md:col-span-3"
                                    />
                              </div>

                              <div className="flex justify-center">
                                    <button
                                          type="submit"
                                          className="bg-[#13274F] text-white py-2 px-12 rounded hover:bg-[#1e3a8a] transition"
                                    >
                                          Submit
                                    </button>
                              </div>
                        </form>
                  </div>
                  <WhatsAppButton language={language} />
                  <Footer language={language} />
            </>
      );
}
