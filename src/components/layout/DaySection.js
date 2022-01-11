import { Fragment } from 'react';
import Hr from './Hr';
const DaySection = ({ id, day, icon, temp }) => {
	let hasSeparator = id !== 5 ? true : false;
	return (
		<Fragment>
			<li key={id} className='w-full flex flex-row justify-center my-2 p-4'>
				<p className='mx-2 flex-1'>{day.toUpperCase()}</p>
				<p className='m-auto flex-2'>{icon}</p>
				<p className='mx-2 flex-1 text-right'>{temp}&deg;C</p>
			</li>
			{hasSeparator && <Hr />}
		</Fragment>
	);
};
export default DaySection;
