module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'main-background':
					"url('https://images.pexels.com/photos/4516067/pexels-photo-4516067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
				'sun-cloud-background':
					"url('https://images.pexels.com/photos/3783385/pexels-photo-3783385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
				'cloud-background':
					"url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80')",
				'rain-background':
					"url('https://images.pexels.com/photos/1166991/pexels-photo-1166991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
				'snow-background':
					"url('https://images.unsplash.com/photo-1549136430-c2e0aadfc69f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')",
				'storm-background':
					"url('https://images.pexels.com/photos/6510344/pexels-photo-6510344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
				'fog-background':
					"url('https://images.pexels.com/photos/1743392/pexels-photo-1743392.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
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
				bg: {
					100: '#729AC0',
					200: '#6C8EA0',
					300: '#3D515E',
					400: '#D0E7F2',
					500: '#C8D8E4',
					600: '#CBDBE9',
					700: '#A3A2A5',
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
