import React from "react";
import navbarRightItems from "../../data/navbarRightItems.json";
import NavItem from "../NavItem.js";

const NavRight = () => {
	return (
		<ul className="navigation-right">
			{navbarRightItems.map(({ id, ...item }) => (
				<NavItem key={id} {...item} />
			))}
		</ul>
	);
};

export default NavRight;
