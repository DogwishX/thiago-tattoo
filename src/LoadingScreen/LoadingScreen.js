import logo from '../shared/white-logo.png';
import './LoadingScreen.css';

function LoadingScreen() {
	return (
		<main className='loadingScreen'>
			<img src={logo} className="logo" alt="logo" />
			{/* Loading Animation */}
			<div className='loading-animation'>
				<div className="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</main>
	);
}

export default LoadingScreen;
