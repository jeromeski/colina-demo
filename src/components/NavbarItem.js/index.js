import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const NavbarItem = (props) => {
	const { id, title, link, subMenu } = props;

	const itemRef = useRef(null);

	// Desktop - Dropdown menu
	//----------------------------------------------------------------

	const handleMouseEnter = () => {
		itemRef.current.classList.add("hovered");
	};

	const handleMouseLeave = () => {
		itemRef.current.classList.remove("hovered");
	};
	return (
		<li key={id} ref={itemRef}>
			<Link
				to={link}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => handleMouseLeave()}>
				{title}{" "}
				<span className="open-dropdown">
					<i className="fa fa-angle-down"></i>
				</span>
			</Link>
			<ul>
				{subMenu &&
					subMenu.map((subMenuItem, idx) => (
						<li key={idx}>
							<Link to={subMenuItem.link}>{subMenuItem.title}</Link>
						</li>
					))}
			</ul>
		</li>
	);
};

export default NavbarItem;
