import { Fragment, useRef, useState, useEffect, useCallback } from 'react';
import GPSButton from '../layout/GPSButton';
import SearchButton from '../layout/SearchButton';
const LocatonInput = (props) => {
	const [inputCity, setInputCity] = useState('');
	const locationRef = useRef();

	const handleInputChange = () => {
		setInputCity(locationRef.current.value);
	};

	const handleSearch = (event) => {
		event.preventDefault();

		props.onSearch({
			method: 'city',
			city: locationRef.current.value,
			lat: null,
			lon: null,
		});
		setInputCity('');
	};

	const handleCurrentPosition = useCallback(() => {
		const success = (position) => {
			props.onSearch({
				method: 'geo',
				city: null,
				lat: position.coords.latitude,
				lon: position.coords.longitude,
			});
		};
		navigator.geolocation.getCurrentPosition(success);
	});

	useEffect(() => {
		if (navigator.geolocation) {
			handleCurrentPosition();
		}
	}, [handleCurrentPosition]);

	return (
		<Fragment>
			<form onSubmit={handleSearch} className='flex-1 flex flex-row'>
				<input
					type='search'
					id={props.id}
					value={inputCity}
					ref={locationRef}
					onChange={handleInputChange}
					className='border-none bg-opacity-0 bg-transparent 
								h-12 p-1 w-full cursor-pointer'
				/>
				<SearchButton />
			</form>
			<GPSButton onClick={handleCurrentPosition} />
		</Fragment>
	);
};
export default LocatonInput;
