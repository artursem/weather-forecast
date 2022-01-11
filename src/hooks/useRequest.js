import { useState, useCallback } from 'react';

const useRequest = () => {
	const [display, setDisplay] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchWeather = useCallback(async (query) => {
		setError(false);
		const appid = '599f9ab00f5ffd6eeb1a6bf54606a714';
		try {
			let response;
			if (query.method === 'city') {
				setLoading(true);
				response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?q=${query.city}&appid=599f9ab00f5ffd6eeb1a6bf54606a714`
				);
			} else if (query.method === 'geo') {
				setLoading(true);
				response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?lat=${query.lat}&lon=${query.lon}&appid=599f9ab00f5ffd6eeb1a6bf54606a714`
				);
			}

			if (!response.ok) {
				setLoading(false);
				setError(true);
				throw new Error('No valid response');
			}
			const data = await response.json();
			// console.log(data);
			const getCity = data.city.name;
			const getTemp = data.list[0].main.temp;
			const getWeather = data.list[0].weather[0].description;
			const getIcon = data.list[0].weather[0].icon;
			console.log(getCity);
			console.log(getTemp);
			console.log(getWeather);
			console.log(getIcon);
			setLoading(false);
			setDisplay({
				city: getCity,
				weather: getWeather,
				temp: `${(getTemp - 272).toFixed(0)}°C`,
				icon: `http://openweathermap.org/img/wn/${getIcon}@4x.png`,
			});
		} catch (error) {
			// setError(true)
		}
	}, []);
	return { display, loading, error, fetchWeather };
};

export default useRequest;
