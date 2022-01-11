import { Search } from 'iconoir-react';
const SearchButton = (props) => {
	return (
		<button
			type='submit'
			className='rounded-md px-2 w-20
            bg-fog-100 text-white flex items-center justify-center
            hover:bg-fog-200 hover:text-fog-400
            active:bg-fog-200 active:text-fog-400
            ease-in duration-200'
			onClick={props.onClick}
		>
			<Search />
		</button>
	);
};
export default SearchButton;
