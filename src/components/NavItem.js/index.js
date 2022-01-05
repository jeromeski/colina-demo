import React, { useRef } from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
	const { id, title, link, subMenu } = props;

	const itemRef = useRef(null);

	// Desktop - Dropdown menu
	//----------------------------------------------------------------

	const handleMouseEnter = () => {
		itemRef.current.classList.add("hovered");
	};

	const handleMouseLeave = (e) => {
		itemRef.current.classList.remove("hovered");
	};
	return (
		<li
			key={id}
			ref={itemRef}
			onMouseEnter={subMenu ? handleMouseEnter : () => ""}
			onMouseLeave={subMenu ? handleMouseLeave : () => ""}>
			<Link to={link}>
				{title}{" "}
				<span className="open-dropdown">{subMenu ? <i className="fa fa-angle-down"></i> : ""}</span>
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

export default NavItem;
