import { useState, useCallback } from 'react';

const useRequest = () => {
	const [display, setDisplay] = useState({});
	const [forecast, setForecast] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchWeather = useCallback(async (query) => {
		setError(false);
		setLoading(false);
		const appid = process.env.REACT_APP_KEY;
		try {
			let response;
			if (query.method === 'city') {
				setLoading(true);
				response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?q=${query.city}&appid=${appid}`
				);
			} else if (query.method === 'geo') {
				setLoading(true);
				response = await fetch(
					`https://api.openweathermap.org/data/2.5/forecast?lat=${query.lat}&lon=${query.lon}&appid=${appid}`
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
			setLoading(false);
			setDisplay({
				city: getCity,
				weather: getWeather,
				temp: `${(getTemp - 272).toFixed(0)}°C`,
				icon: `http://openweathermap.org/img/wn/${getIcon}@2x.png`,
				code: getIcon,
			});
			const forecastArray = data.list
				.map((day) => {
					let cel = `${(day.main.temp - 272).toFixed(0)}°C`;
					let iconLink = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
					return { temp: cel, icon: iconLink };
				})
				.slice(0, 7);
			setForecast(forecastArray);
		} catch (error) {
			// setError(true);
		}
	}, []);
	return { display, forecast, loading, error, fetchWeather };
};

export default useRequest;
