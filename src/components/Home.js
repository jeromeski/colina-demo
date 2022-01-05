import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaData from "./MetaData";
import logo from "../assets/images/logo.png";
import logoMobile from "../assets/images/logo-mobile.png";
import NavbarItem from "./NavbarItem.js";
import Navbar from "./Navbar.js";

const Home = () => {
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Sticky header
	// ----------------------------------------------------------------

	function handleScroll() {
		const navbarFixed = document.querySelector("header");
		let scroll = this.scrollY;
		if (scroll >= 94) {
			navbarFixed.classList.add("sticked");
			if (window.innerWidth < 576) {
				navbarFixed.classList.remove("sticked");
			} else navbarFixed.classList.add("sticked");
		} else {
			navbarFixed.classList.remove("sticked");
		}
	}

	return (
		<Fragment>
			<MetaData title="Colina - Hotel, Resort & Accomodation | Home" />
			<div className="wrapper">
				<header>
					<div className="container">
						<nav className="navigation-top clearfix">
							<div className="navigation-top-left">
								<Link className="box" to="#!">
									<i className="fa fa-facebook"></i>
								</Link>
								<Link className="box" to="#!">
									<i className="fa fa-twitter"></i>
								</Link>
								<Link className="box" to="#!">
									<i className="fa fa-youtube"></i>
								</Link>
							</div>

							<div className="navigation-top-right">
								<Link className="box" to="#">
									<i className="icon icon-star"></i>
									Special offers
								</Link>
								<Link className="box" to="reservation-1.html">
									<i className="icon icon-tag"></i>
									Reservations
								</Link>
								<Link className="box" to="#">
									<i className="icon icon-phone-handset"></i>
									(01) 252-3333
								</Link>
							</div>
						</nav>

						<nav className="navigation-main clearfix">
							<div className="logo animated fadeIn">
								<Link to="index.html">
									<img className="logo-desktop" src={logo} alt="Alternate Text" />
									<img className="logo-mobile" src={logoMobile} alt="Alternate Text" />
								</Link>
							</div>

							<div className="toggle-menu">
								<i className="icon icon-menu"></i>
							</div>

							<div className="navigation-block clearfix">
								<Navbar />

								<ul className="navigation-right">
									<li>
										<Link to="facility.html">Facilities</Link>
									</li>
									<li>
										<Link to="#">
											Blog{" "}
											<span className="open-dropdown">
												<i className="fa fa-angle-down"></i>
											</span>
										</Link>
										<ul>
											<li>
												<Link to="blog-category.html">Blog category</Link>
											</li>
											<li>
												<Link to="blog-item.html">Blog item</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to="contact.html">Contact</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</header>
			</div>
		</Fragment>
	);
};

export default Home;
