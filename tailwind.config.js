/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				beige: '#ff8706',
				olive: '#ff8706',
				gold: '#D4B98C',
				'text-dark': '#333333',
				'text-light': '#666666',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				amiri: ['Amiri', 'serif'],
			},
			backgroundImage: {
				'hero-pattern': "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
			},
		},
	},
	plugins: [],
};