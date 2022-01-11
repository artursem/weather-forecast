import { Fragment } from 'react';
import { SunLight, Cloud, CloudSunny, Snow, Fog } from 'iconoir-react';
import DaySection from '../layout/DaySection';

const WeatherWeek = (props) => {
	return (
		<ul className='w-full flex flex-col items-stretch m-0'>
			<DaySection id={1} day={'monday'} icon={<SunLight />} temp={1} />
			<DaySection id={2} day={'tuesday'} icon={<CloudSunny />} temp={1} />
			<DaySection id={3} day={'wednsday'} icon={<Cloud />} temp={12} />
			<DaySection id={4} day={'thursday'} icon={<Fog />} temp={4} />
			<DaySection id={5} day={'friday'} icon={<Snow />} temp={3} />
		</ul>
	);
};
export default WeatherWeek;
