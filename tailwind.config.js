/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			translate: {
				'101': '101%', // now you can use `translate-x-101`
			    },
			    keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'pulse-grow': {
					'0%, 100%': {
						transform: 'scale(1)',
						boxShadow: '0 0 0 0 bg-[#ff8706]',
					},
					'50%': {
						transform: 'scale(1.10)',
						boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)',
					},
				},
				shimmer: {
					'0%': { backgroundPosition: '200% 0%' },
					'100%': { backgroundPosition: '-200% 0%' },
				},
				beam: {
					'0%': { backgroundPosition: '200% 0%' },
					'100%': { backgroundPosition: '-200% 0%' },
				},
			    },
			    animation: {
				marquee: 'marquee 15s linear infinite',
				'pulse-grow': 'pulse-grow 2s infinite',
				'shimmer': 'shimmer 2s linear infinite',
				beam: 'beam 4s linear infinite',
			    },
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