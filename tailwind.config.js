module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-background':
					"url('https://images.unsplash.com/photo-1547483238-fab280308b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
				'sec-background':
					"url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
				'cloud-background':
					"url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
			},
			colors: {
				transparent: 'rgba(0,0,0,0)',
				fog: {
					100: 'rgba(0,0,0,0.1)',
					200: 'rgba(0,0,0,0.2)',
					300: 'rgba(0,0,0,0.3)',
					400: 'rgba(0,0,0,0.4)',
					500: 'rgba(0,0,0,0.5)',
					600: 'rgba(0,0,0,0.6)',
					700: 'rgba(0,0,0,0.7)',
					800: 'rgba(0,0,0,0.8)',
					900: 'rgba(0,0,0,0.9)',
				},
				sky: {
					100: '#4EB8CD',
					300: '#008FB3',
					500: '#0076A1',
				},
			},
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
