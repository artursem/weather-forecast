const WeatherNow = (props) => {
	return (
		<section className='w-full flex flex-col items-center'>
			<h3 className='font-bold text-4xl my-2'>{props.get.city}</h3>
			{/* <SunLight width={120} height={120} className='my-6' /> */}
			<img src={props.get.icon} alt={props.get.weather} />
			<h1 className='font-bold text-4xl my-2'>{props.get.temp}</h1>
			<p className='mb-2'>{props.get.weather}</p>
		</section>
	);
};

export default WeatherNow;
