// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/vendor/bootstrap.css";
import "./assets/css/vendor/font-awesome.min.css";
import "./assets/css/vendor/linear-icons.min.css";
import "./assets/css/vendor/hotel-icons.min.css";
import "./assets/css/vendor/animate.css";
import "./assets/css/vendor/owl.carousel.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookingIntro from "./components/Booking/BookingIntro";
import BookingBox from "./components/Booking/BookingBox";
import RoomsIntro from "./components/Booking/RoomsIntro";
import About from "./components/About";
import RoomsCategory from "./pages/RoomsCategory";

import NotFound from "./components/NotFound";
import BookingStepOne from "./components/BookingStepOne";
import BookingStepTwo from "./components/BookingStepTwo";
import BookingStepThree from "./components/BookingStepThree";
import ShortCodes from "./components/ShortCodes";
import Facilities from "./components/Facilities";
import BlogCategory from "./components/BlogCategory";
import Contact from "./components/Contact";
import BlogItem from "./components/BlogItem";
import Header from "./layout/Header";
import { Fragment } from "react";
import Footer from "./layout/Footer";
import Subscribe from "./components/common/Subscribe";
import RoomOverview from "./pages/RoomOverview";

function App() {
	return (
		<BrowserRouter>
			<Fragment>
				<div className="wrapper">
					<Header />
					<Fragment>
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
							<Route path="/booking/step2" element={<BookingStepThree />} exact />
							<Route path="/facilities" element={<Facilities />} exact />
							<Route path="/blog/category" element={<BlogCategory />} exact />
							<Route path="/blog/category" element={<BlogItem />} exact />
							<Route path="/contact" element={<Contact />} exact />
						</Routes>
					</Fragment>
					<Subscribe />
					<Footer />
				</div>
			</Fragment>
		</BrowserRouter>
	);
}

export default App;
