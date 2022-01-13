const Layout = ({ bg, children }) => {
	const weatherBg = {
		1: { color: 'bg-sky-100', image: 'bg-main-background' },
		2: { color: 'bg-sky-100', image: 'bg-main-background' },
		3: { color: 'bg-sky-100', image: 'bg-main-background' },
		4: { color: 'bg-sky-100', image: 'bg-main-background' },
		9: { color: 'bg-sky-100', image: 'bg-main-background' },
		10: { color: 'bg-sky-100', image: 'bg-main-background' },
		11: { color: 'bg-sky-100', image: 'bg-main-background' },
		13: { color: 'bg-sky-100', image: 'bg-main-background' },
		50: { color: 'bg-sky-100', image: 'bg-main-background' },
	};

	return (
		<main
			className={`flex flex-col justify-start items-center w-full min-h-screen
			  ${weatherBg[bg].color}
			`}
		>
			<div
				className={`flex flex-col items-stretch w-full max-w-2xl min-h-screen
			 bg-cover shadow-2xl
			 ${weatherBg[bg].image}`}
			>
				{children}
			</div>
		</main>
	);
};

export default Layout;
