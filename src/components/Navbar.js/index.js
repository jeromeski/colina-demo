import React, { Fragment, Link } from "react";
import leftMenuItems from "../../data/navbarLeftItems.json";
import NavbarItem from "../NavbarItem.js";

const Navbar = () => {
	return (
		<ul className="navigation-left">
			{leftMenuItems.map(({ id, ...item }) => (
				<NavbarItem key={id} {...item} />
			))}
		</ul>
	);
};

export default Navbar;
