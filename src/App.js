import React, { useState, Fragment } from 'react';
import useRequest from './hooks/useRequest';
import Layout from './components/layout/Layout';
import Card from './components/layout/Card';
import LocationInput from './components/weather/LocationInput';
import WeatherNow from './components/weather/WeatherNow';
import WeatherWeek from './components/weather/WeatherWeek';
import Refresh from './components/icons/Refresh';
import ArrowUp from './components/icons/ArrowUp';

function App() {
	const [location, setLocation] = useState(null);
	const { display, forecast, loading, error, fetchWeather } = useRequest();

	const handleSearch = (location) => {
		setLocation(location);
		fetchWeather(location);
	};

	let displayResults = (
		<Card classes='h-48'>
			<p className='m-auto'>
				PICK LOCATION
				<ArrowUp />
			</p>
		</Card>
	);
	if (loading) {
		displayResults = (
			<Card classes='h-48'>
				<Refresh />
			</Card>
		);
	}
	if (error) {
		displayResults = (
			<Card classes='h-48'>
				<p className='m-auto'>ERROR</p>
			</Card>
		);
	}
	if (location && !error && !loading) {
		displayResults = (
			<Fragment>
				<Card classes='p-2'>
					<WeatherNow get={display} />
				</Card>

				<Card classes='p-2'>
					<WeatherWeek get={forecast} />
				</Card>
				{/* <Card classes='h-48 p-2'>MAPA</Card> */}
			</Fragment>
		);
	}
	let weatherBg = 1;
	if (display.hasOwnProperty('code')) {
		weatherBg = parseInt(display.code.slice(0, 2));
	}
	return (
		<Layout bg={weatherBg}>
			<Card>
				<LocationInput onSearch={handleSearch} />
			</Card>
			{displayResults}
		</Layout>
	);
}

export default App;
