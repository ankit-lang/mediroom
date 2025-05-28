import React from "react";
import { format } from "date-fns";

export default function BookingForm() {
      const [checkIn, setCheckIn] = React.useState(new Date());
      const [checkOut, setCheckOut] = React.useState(new Date(Date.now() + 86400000));
      const [adults, setAdults] = React.useState(1);
      const [children, setChildren] = React.useState(0);
      const [promoCode, setPromoCode] = React.useState("");

      return (
            <div className="bg-black/70 text-white p-4 rounded-2xl shadow-xl w-full max-w-6xl mx-auto">
                  <div className="grid grid-cols-6 gap-4 items-center">
                        {/* Check In */}
                        <div className="col-span-1">
                              <label className="text-sm mb-1 block">Check In</label>
                              <input
                                    type="date"
                                    className="w-full p-2 rounded bg-white/10 border border-white text-white"
                                    value={format(checkIn, "yyyy-MM-dd")}
                                    onChange={(e) => setCheckIn(new Date(e.target.value))}
                              />
                        </div>

                        {/* Check Out */}
                        <div className="col-span-1">
                              <label className="text-sm mb-1 block">Check Out</label>
                              <input
                                    type="date"
                                    className="w-full p-2 rounded bg-white/10 border border-white text-white"
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
                                    onChange={(e) => setAdults(Number(e.target.value))}
                              >
                                    {[1, 2, 3, 4, 5].map((num) => (
                                          <option key={num} value={num}>{num}</option>
                                    ))}
                              </select>
                        </div>

                        {/* Children */}
                        <div className="col-span-1">
                              <label className="text-sm mb-1 block">Children</label>
                              <select
                                    className="w-full p-2 rounded bg-white/10 border border-white text-white"
                                    value={children}
                                    onChange={(e) => setChildren(Number(e.target.value))}
                              >
                                    {[0, 1, 2, 3, 4, 5].map((num) => (
                                          <option key={num} value={num}>{num}</option>
                                    ))}
                              </select>
                        </div>

                        {/* Promo Code */}
                        <div className="col-span-1">
                              <label className="text-sm mb-1 block">Promo Code</label>
                              <input
                                    type="text"
                                    className="w-full p-2 rounded bg-white/10 border border-white text-white"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                              />
                        </div>

                        {/* Book Now */}
                        <div className="col-span-1 flex flex-col justify-end h-full">

                              <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-2 rounded">
                                    Book Now
                              </button>
                        </div>
                  </div>
            </div>
      );
}
