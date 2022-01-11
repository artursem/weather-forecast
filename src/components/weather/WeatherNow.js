import { SunLight } from 'iconoir-react';
const WeatherNow = (props) => {
	return (
		<section className='w-full flex flex-col items-center'>
			<h3 className='font-bold text-4xl my-2'>Wrocław</h3>
			<SunLight width={120} height={120} className='my-6' />
			<h1 className='font-bold text-4xl my-2'>1&deg;C</h1>
			<p className='mb-2'>Partly cloudy</p>
		</section>
	);
};

export default WeatherNow;

// export function getServerSideProps() {
// const appid = '599f9ab00f5ffd6eeb1a6bf54606a714';
// const response = await fetch(
// 	`http://api.openweathermap.org/data/2.5/weather?lat=17.268736&lon=51.5178496&appid=${appid}`
// );
// if (!response.ok) {
// 	throw new Error('No valid response');
// }
// const data = await response.json();
// 	return {
// 		props: {
// 			weather: 'test',
// 		},
// 	};
// }

// props: {
// 	city: data.name,
// 	description: data.weather[0].main,
// 	temp: `${(data.main.temp - 272).toFixed(0)}°C`,
// 	icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
// },
