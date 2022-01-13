import { PinAlt } from 'iconoir-react';
const GPSButton = (props) => {
	return (
		<button
			type='submit'
			className='rounded-md ml-2 w-16
            bg-fog-100 text-white flex items-center justify-center
            hover:bg-fog-200 hover:text-fog-400
            active:bg-fog-200 active:text-fog-400
            ease-in duration-200'
			onClick={props.onClick}
		>
			<PinAlt />
		</button>
	);
};
export default GPSButton;
