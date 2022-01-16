import { Fragment, useRef, useState, useEffect, useCallback } from 'react';
import GPSButton from '../layout/GPSButton';
import SearchButton from '../layout/SearchButton';
const LocatonInput = ({ onSearch }) => {
	const [inputCity, setInputCity] = useState('');
	const locationRef = useRef();

	const handleInputChange = () => {
		setInputCity(locationRef.current.value);
	};

	const handleSearch = (event) => {
		event.preventDefault();

		onSearch({
			method: 'city',
			city: locationRef.current.value,
			lat: null,
			lon: null,
		});
		// setInputCity('');
	};

	const handleCurrentPosition = useCallback(() => {
		const success = (position) => {
			onSearch({
				method: 'geo',
				city: null,
				lat: position.coords.latitude,
				lon: position.coords.longitude,
			});
		};
		const failure = (err) => {
			console.log(err.code, err.message);
		};
		setInputCity('');
		navigator.geolocation.getCurrentPosition(success, failure);
	}, [onSearch]);

	useEffect(() => {
		handleCurrentPosition();
	}, [handleCurrentPosition]);

	return (
		<Fragment>
			<form onSubmit={handleSearch} className='flex-1 flex flex-row'>
				<input
					type='search'
					value={inputCity}
					ref={locationRef}
					onChange={handleInputChange}
					className='rounded-md h-12 p-1 mr-2 w-full cursor-pointer

					md:border-fog-300 md:border-0 md:bg-fog-100 
					md:text-white  
					
					bg-white-500 text-fog-600 border-2'
				/>
				<SearchButton />
			</form>
			<GPSButton onClick={handleCurrentPosition} />
		</Fragment>
	);
};
export default LocatonInput;
