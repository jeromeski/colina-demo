import React, { useEffect, useRef, useState } from "react";
import "./index.css";

import TopNav from "./TopNav";

import NavMenu from "./NavMenu";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	let headerRef = useRef(null);

	// Sticky header
	// ----------------------------------------------------------------

	function handleScroll() {
		const navbarFixed = headerRef.current;

		const page = document.querySelector("html");

		const controlSticky = () => {
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

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header ref={headerRef}>
			<div className="container">
				<TopNav />
				<NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} headerRef={headerRef} />
			</div>
		</header>
	);
};

export default Header;
