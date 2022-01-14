const Layout = ({ bg, children }) => {
	const weatherBg = {
		1: {
			color: 'bg-gradient-to-b from-main1 to-main2',
			image: 'bg-main-background',
		},
		2: {
			color: 'bg-gradient-to-b from-sc1 to-sc2',
			image: 'bg-sun-cloud-background',
		},
		3: {
			color: 'bg-gradient-to-b from-c1 to-c2',
			image: 'bg-cloud-background',
		},
		4: {
			color: 'bg-gradient-to-b from-c1 to-c2',
			image: 'bg-cloud-background',
		},
		9: { color: 'bg-gradient-to-b from-r1 to-r2', image: 'bg-rain-background' },
		10: {
			color: 'bg-gradient-to-b from-r1 to-r2',
			image: 'bg-rain-background',
		},
		11: {
			color: 'bg-gradient-to-b from-st1 to-st2',
			image: 'bg-storm-background',
		},
		13: {
			color: 'bg-gradient-to-b from-sn1 to-sn2',
			image: 'bg-snow-background',
		},
		50: { color: 'bg-gradient-to-b from-f1 to-f2', image: 'bg-fog-background' },
	};
	return (
		<main
			className={`w-full min-h-screen flex flex-col justify-start items-center 
			  bg-cover ${weatherBg[bg].color}`}
		>
			<div
				className={`flex flex-col items-stretch w-full max-w-3xl min-h-screen
			 bg-cover shadow-2xl ${weatherBg[bg].image}`}
			>
				{children}
			</div>
		</main>
	);
};

export default Layout;
