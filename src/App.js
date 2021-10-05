import './App.css';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import Hero from './Hero/Hero'

function App() {
	const [loading, setLoading] = useState(true);
	window.addEventListener('load', () => setLoading(false));

	return (
		<>{loading ? <LoadingScreen /> : 
			<main>
				<Hero />
			</main>}
		</>
	);
}

export default App;
