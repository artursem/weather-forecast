const Layout = (props) => {
	return (
		<main
			className='flex flex-col justify-start items-center w-full min-h-screen
			bg-main-background bg-cover 
			'
		>
			{props.children}
		</main>
	);
};

export default Layout;
