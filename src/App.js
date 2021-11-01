import './App.css';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import Hero from './Hero/Hero';
import SiteDescription from './SiteDescription/SiteDescription';
import Gallery from './Gallery/Gallery';

function App() {
	const [loading, setLoading] = useState(true);
	window.addEventListener('load', () =>
		setLoading(false)
	);

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<main>
					{/* <Hero />
					<SiteDescription /> */}
					<Gallery/>
				</main>
			)}
		</>
	);
}

export default App;
