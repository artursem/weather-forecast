import React, { useState, useEffect, Fragment } from 'react';
import useRequest from './hooks/useRequest';
import Layout from './components/layout/Layout';
import Card from './components/layout/Card';
import LocationInput from './components/weather/LocationInput';
import WeatherNow from './components/weather/WeatherNow';
import WeatherWeek from './components/weather/WeatherWeek';
import { Refresh } from 'iconoir-react';
function App() {
	const [location, setLocation] = useState(null);

	const { display, forecast, loading, error, fetchWeather } = useRequest();

	useEffect(() => {
		fetchWeather(location);
	}, [fetchWeather, location]);

	const handleSearch = (location) => {
		setLocation(location);
	};

	let displayResults = (
		<Card classes='h-48'>
			<p className='m-auto'>PICK LOCATION</p>
		</Card>
	);
	if (loading) {
		displayResults = (
			<Card classes='h-48'>
				<Refresh width={30} height={30} className='m-auto animate-spin' />
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
				<Card classes='h-48 p-2'>MAPA</Card>
			</Fragment>
		);
	}

	return (
		<Layout>
			<div className='flex flex-col items-stretch w-full max-w-2xl '>
				<Card>
					<LocationInput onSearch={handleSearch} />
				</Card>
				{displayResults}
			</div>
		</Layout>
	);
}

export default App;
