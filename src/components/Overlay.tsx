// import { useBookingModal } from './useBookingModal';
import { useEffect } from 'react';
import { useBookingModal } from './useBookingModal';

export default function BookingModal() {
      const { isOpen, closeModal } = useBookingModal();

      useEffect(() => {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
            return () => {
                  document.body.style.overflow = 'auto';
            };
      }, [isOpen]);

      if (!isOpen) return null;

      return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                  <div className="bg-white w-full max-w-2xl mx-4 rounded-lg p-6 relative">
                        <button
                              onClick={closeModal}
                              className="absolute top-3 right-3 text-2xl font-bold"
                        >
                              &times;
                        </button>
                        <h2 className="text-lg font-semibold mb-4">Book Your Stay</h2>
                        {/* Your form elements here */}
                        <p>Check-in, Check-out, Adults, Children, Promo Code, etc.</p>
                  </div>
            </div>
      );
}
