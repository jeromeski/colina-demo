import React from "react";
import leftMenuItems from "../../data/navbarLeftItems.json";
import NavItem from "../NavItem.js/index.js";

const NavLeft = () => {
	return (
		<ul className="navigation-left">
			{leftMenuItems.map(({ id, ...item }) => (
				<NavItem key={id} {...item} />
			))}
		</ul>
	);
};

export default NavLeft;
