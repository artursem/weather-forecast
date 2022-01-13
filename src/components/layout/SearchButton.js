import { Search } from 'iconoir-react';
const SearchButton = (props) => {
	return (
		<button
			type='submit'
			className={`rounded-md px-2 w-20
            bg-fog-100  flex items-center justify-center
            hover:bg-fog-200 hover:text-fog-400
            active:bg-fog-200 active:text-fog-400
            ease-in duration-200 ${
							props.disabled ? 'text-gray-400' : 'text-white'
						} `}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			<Search />
		</button>
	);
};
export default SearchButton;
