import "./App.css";
import NavBar from "./components/NavBar/navBar";
import data from "./data";

function App() {
	return (
		<>
			<NavBar data={data} />
		</>
	);
}

export default App;
