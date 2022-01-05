// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/vendor/bootstrap.css";
import "./assets/css/vendor/font-awesome.min.css";
import "./assets/css/vendor/linear-icons.min.css";
import "./assets/css/vendor/hotel-icons.min.css";
import "./assets/css/vendor/animate.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar.js";
import BookingIntro from "./components/Booking/BookingIntro";
import BookingBox from "./components/Booking/BookingBox";
import RoomsIntro from "./components/Booking/RoomsIntro";
import About from "./components/About";
import RoomsCategory from "./components/RoomsCategory";
import RoomOverview from "./components/RoomOverview";
import NotFound from "./components/NotFound";
import BookingStepOne from "./components/BookingStepOne";
import BookingStepTwo from "./components/BookingStepTwo";
import BookingStepThree from "./components/BookingStepThree";
import ShortCodes from "./components/ShortCodes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/booking/intro" element={<BookingIntro />} exact />
				<Route path="/booking/box" element={<BookingBox />} exact />
				<Route path="/rooms/intro" element={<RoomsIntro />} exact />
				<Route path="/about" element={<About />} exact />
				<Route path="/rooms/category" element={<RoomsCategory />} exact />
				<Route path="/room/overview" element={<RoomOverview />} exact />
				<Route path="/404" element={<NotFound />} exact />
				<Route path="/shortcodes" element={<ShortCodes />} exact />
				<Route path="/booking/step1" element={<BookingStepOne />} exact />
				<Route path="/booking/step2" element={<BookingStepTwo />} exact />
				<Route path="/booking/step2" element={<BookingStepThree />} exact />
			</Routes>
		</BrowserRouter>
	);
}

export default App;