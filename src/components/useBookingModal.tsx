import { create } from 'zustand';

export const useBookingModal = create((set) => ({
      isOpen: false,
      openModal: () => set({ isOpen: true }),
      closeModal: () => set({ isOpen: false }),
}));

