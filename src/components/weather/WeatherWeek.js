import DaySection from '../layout/DaySection';

const getDayOfTheWeek = (i) => {
	let day = new Date();
	day.setDate(day.getDate() + i);
	const nameDay = Intl.DateTimeFormat(navigator.language, {
		weekday: 'long',
	}).format(day);
	return nameDay;
};

const WeatherWeek = (props) => {
	return (
		<ul className='w-full flex flex-col items-stretch m-0'>
			{props.get.map((day, idx) => {
				return (
					<DaySection
						key={idx + 1}
						id={idx}
						day={getDayOfTheWeek(idx)}
						temp={day.temp}
						icon={day.icon}
					/>
				);
			})}
		</ul>
	);
};
export default WeatherWeek;
