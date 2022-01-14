const Layout = ({ bg, children }) => {
	const weatherBg = {
		1: {
			color: 'bg-main-background',
			image: 'bg-main-background',
		},
		2: { color: 'bg-bg-200', image: 'bg-sun-cloud-background' },
		3: { color: 'bg-bg-300', image: 'bg-cloud-background' },
		4: { color: 'bg-bg-300', image: 'bg-cloud-background' },
		9: { color: 'bg-bg-400', image: 'bg-rain-background' },
		10: { color: 'bg-bg-400', image: 'bg-rain-background' },
		11: { color: 'bg-bg-500', image: 'bg-storm-background' },
		13: { color: 'bg-bg-600', image: 'bg-snow-background' },
		50: { color: 'bg-bg-700', image: 'bg-fog-background' },
	};
	return (
		<main
			className={`w-full min-h-screen
			  bg-cover ${weatherBg[bg].image}`}
		>
			<div
				className='flex flex-col justify-start items-center 
			w-full min-h-screen backdrop-filter backdrop-blur-xl'
			>
				<div
					className={`flex flex-col items-stretch w-full max-w-3xl min-h-screen
			 bg-cover shadow-2xl ${weatherBg[bg].image}`}
				>
					{children}
				</div>
			</div>
		</main>
	);
};

export default Layout;
