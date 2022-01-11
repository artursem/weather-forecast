import DaySection from '../layout/DaySection';

const WeatherWeek = (props) => {
	console.log(props.get);
	return (
		<ul className='w-full flex flex-col items-stretch m-0'>
			{props.get.map((day, idx) => {
				return (
					<DaySection key={idx} day={idx} temp={day.temp} icon={day.icon} />
				);
			})}
		</ul>
	);
};
export default WeatherWeek;
