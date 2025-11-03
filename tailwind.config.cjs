module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				glow: 'var(--color-glow)'
			},
			boxShadow: {
				'neon-md': '0 10px 30px rgba(124, 58, 237, 0.14), 0 0 40px var(--color-glow)',
			},
		},
	},
	plugins: [],
}