import React, { useEffect } from "react";
import { format } from "date-fns";
import Booknow from "./shared/BookNowbutton"
export default function BookingForm() {
      const [checkIn, setCheckIn] = React.useState(new Date());
      const [checkOut, setCheckOut] = React.useState(new Date(Date.now() + 86400000));
      const [adults, setAdults] = React.useState(1);
      const [children, setChildren] = React.useState(0);

      const [promoCode, setPromoCode] = React.useState("");

      const submitHandler = async (e) => {
            e.preventDefault();
            // setIsSubmitting(true);

            const formData = new URLSearchParams();
            formData.append("checkIn", checkIn);
            formData.append("checkOut", checkOut);
            formData.append("adults", adults);
            formData.append("children", children);
            formData.append("promoCode", promoCode);

            try {

                  // https://script.google.com/macros/s/AKfycbyLU5PYiBmiP2hnWv-Eoj4lQMu1eDq9g6vKVrkAEp5yB8_e00DQuvyOXYBR8dS5w4o/exec
                  const response = await fetch(
                        'https://script.google.com/macros/s/AKfycbx4AqZj-upxMSp9umUjhf3l9YBe_bg2j4SyiSoeNdSnp7mikKd5QUzRPj91-mUvJBw/exec',
                        {
                              method: 'POST',
                              headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                              },
                              body: formData

                        }
                  );

                  const result = await response.json();
                  alert("form Submitted Successfully")
                  // setMessage(result);
            } catch (error) {
                  // setMessage('Error submitting form');
                  alert("Error submitting form", error)
            }
      };
      return (
            <div className="bg-[#ff8706] text-white p-4 rounded-2xl shadow-xl w-full max-w-6xl mx-auto">
                  <div >
                        {/* Check In */}
                        <form action="" className="grid grid-cols-6 gap-4 items-center">

                              <div className="col-span-1">
                                    <label className="text-sm mb-1 block">Check In</label>
                                    <input
                                          type="date"
                                          required
                                          className="w-full min-w-0 p-2 text-base rounded bg-white/10 border border-white text-white tracking-wide focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-white/70"
                                          value={format(checkIn, "yyyy-MM-dd")}
                                          onChange={(e) => setCheckIn(new Date(e.target.value))}
                                    />
                              </div>

                              {/* Check Out */}
                              <div className="col-span-1">
                                    <label className="text-sm mb-1 block">Check Out</label>
                                    <input
                                          type="date"
                                          required
                                          className="w-full min-w-0 p-2 text-base rounded bg-white/10 border border-white text-white tracking-wide focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-white/70"
                                          value={format(checkOut, "yyyy-MM-dd")}
                                          onChange={(e) => setCheckOut(new Date(e.target.value))}
                                    />
                              </div>

                              {/* Adults */}
                              <div className="col-span-1">
                                    <label className="text-sm mb-1 block">Adults</label>
                                    <select
                                          className="w-full p-2 rounded bg-white/10 border border-white text-white"
                                          value={adults}
                                          required
                                          onChange={(e) => setAdults(Number(e.target.value))}
                                    >
                                          {[1, 2, 3, 4, 5].map((num) => (
                                                <option key={num} className="bg-orange-400" value={num}  >{num}</option>
                                          ))}
                                    </select>
                              </div>

                              {/* Children */}
                              <div className="col-span-1">
                                    <label className="text-sm mb-1 block">Children</label>
                                    <select
                                          required
                                          className="w-full p-2 rounded bg-white/10 border border-white text-white"
                                          value={children}
                                          onChange={(e) => setChildren(Number(e.target.value))}
                                    >
                                          {[0, 1, 2, 3, 4, 5].map((num) => (
                                                <option className="bg-orange-400" key={num} value={num}>{num}</option>
                                          ))}
                                    </select>
                              </div>

                              {/* Promo Code */}
                              <div className="col-span-1">
                                    <label className="text-sm mb-1 block">Promo Code</label>
                                    <input
                                          type="text"
                                          required
                                          className="w-full p-2 rounded bg-white/10 border border-white text-white"
                                          value={promoCode}
                                          onChange={(e) => setPromoCode(e.target.value)}
                                    />
                              </div>

                              {/* Book Now */}
                              <div type="submit" onClick={submitHandler} className="  col-span-1 flex flex-col justify-end h-full bg-orange-400">


                                    <Booknow />
                              </div>
                        </form>
                  </div>

            </div>
      );
}
