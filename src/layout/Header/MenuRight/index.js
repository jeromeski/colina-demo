import React from "react";
import navbarRightItems from "../../../data/navbarRightItems.json";
import MenuItem from "../MenuItem";

const MenuRight = () => {
	return (
		<ul className="navigation-right">
			{navbarRightItems.map((item) => (
				<MenuItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default MenuRight;
