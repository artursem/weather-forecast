import Search from '../icons/Search';
const SearchButton = (props) => {
	return (
		<button
			type='submit'
			className='rounded-md px-2 w-20 h-12
            bg-fog-100  flex items-center justify-center
            hover:bg-fog-200 hover:text-fog-400
            active:bg-fog-200 active:text-fog-400
            ease-in duration-200 text-white'
			onClick={props.onClick}
		>
			<Search />
		</button>
	);
};
export default SearchButton;
