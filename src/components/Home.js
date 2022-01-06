import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MetaData from "./MetaData";
import logo from "../assets/images/logo.png";
import logoMobile from "../assets/images/logo-mobile.png";
import NavLeft from "./NavLeft/index.js";
import NavRight from "./NavRight";
import { NavbarBrand } from "reactstrap";

const Home = () => {
	const [toggle, setToggle] = useState(false);
	let headerRef = useRef(null);

	let navblockRef = useRef(null);

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	// Sticky header
	// ----------------------------------------------------------------

	function handleScroll() {
		const navbarFixed = headerRef.current;

		const page = document.querySelector("html");

		const controlSticky = () => {
			//
			const doScroll = page.scrollTop;
			if (doScroll >= 10) {
				navbarFixed.classList.add("sticked");
			} else {
				navbarFixed.classList.remove("sticked");
			}
		};

		if (page.scrollTop > 94) {
			navbarFixed.classList.add("sticked");
		}

		["bind", "ready", "scroll"].forEach((evt) => {
			page.addEventListener(evt, controlSticky(), false);
		});
	}

	const handleToggle = (e) => {
		setToggle((prev) => !prev);
		const navbarFixed = headerRef.current;

		console.log(navbarFixed);
		if (!navbarFixed.classList.contains("sticked")) {
			navbarFixed.classList.add("sticked");
		}
	};

	return (
		<Fragment>
			<MetaData title="Colina - Hotel, Resort & Accomodation | Home" />
			<div className="wrapper">
				<header ref={headerRef}>
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

							<div className={`${toggle ? "open" : ""} toggle-menu`} onClick={handleToggle}>
								<i className="icon icon-menu"></i>
							</div>

							<div className={`${toggle ? "open" : ""} navigation-block clearfix`}>
								<NavLeft />
								<NavRight />
							</div>
						</nav>
					</div>
				</header>
			</div>
		</Fragment>
	);
};

export default Home;

/*
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
  */
