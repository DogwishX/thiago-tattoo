import logo from '../shared/white-logo.png';
import './LoadingScreen.css';

function LoadingScreen() {
	return (
		<main className='loadingScreen'>
			<img src={logo} class="logo" alt="logo" />
			{/* Loading Animation */}
			<div class='loading-animation'>
				<div class="lds-ellipsis">
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
