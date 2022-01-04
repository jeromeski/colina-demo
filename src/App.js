// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/vendor/bootstrap.css";
import "./assets/css/vendor/font-awesome.min.css";
import "./assets/css/vendor/linear-icons.min.css";
import "./assets/css/vendor/hotel-icons.min.css";
import "./assets/css/vendor/animate.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} exact />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
