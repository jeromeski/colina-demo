import React from "react";
import leftMenuItems from "../../../data/navbarLeftItems.json";
import MenuItem from "../MenuItem";

const MenuLeft = () => {
	return (
		<ul className="navigation-left">
			{leftMenuItems.map((item) => (
				<MenuItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default MenuLeft;
