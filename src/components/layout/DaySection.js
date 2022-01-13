import { Fragment } from 'react';
import Hr from './Hr';
const DaySection = (props) => {
	let hasSeparator = props.id !== 6 ? true : false;
	return (
		<Fragment>
			<li className='w-full h-12 flex flex-row justify-center items-stretch my-2 p-4'>
				<div className='mx-2 flex-1'>{props.day}</div>
				<div className='m-auto flex-2 absolute '>
					<img src={props.icon} className='relative -top-4' />
				</div>
				<div className='mx-2 flex-1 text-right'>{props.temp}</div>
			</li>
			{hasSeparator && <Hr />}
		</Fragment>
	);
};
export default DaySection;
