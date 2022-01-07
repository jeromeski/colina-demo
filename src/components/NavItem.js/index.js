import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slideUp, slideDown } from "es6-slide-up-down";

const NavItem = (props) => {
	const { id, title, link, subMenu } = props;
	const [showSubItems, setShowSubItems] = useState(false);

	const itemRef = useRef(null);
	const subMenuDropdownRef = useRef(null);
	const subDropdown = subMenuDropdownRef.current;

	// Desktop - Dropdown menu
	//----------------------------------------------------------------

	const handleMouseEnter = () => {
		itemRef.current.classList.add("hovered");
	};

	const handleMouseLeave = (e) => {
		itemRef.current.classList.remove("hovered");
	};

	// Mobile - Dropdown menu
	//----------------------------------------------------------------

	useEffect(() => {
		console.log(showSubItems);
		if (showSubItems) {
			// Check if mobile or not
			if (window.innerWidth >= 992) {
				return false;
			}
			//  execute slidedown
			const _drop = subDropdown.closest("li").querySelector("ul");
			slideDown(_drop);
		}

		if (!showSubItems && subDropdown) {
			const _drop = subDropdown.closest("li").querySelector("ul");
			slideUp(_drop);
		}
	}, [showSubItems, subDropdown]);

	return (
		<li
			key={id}
			ref={itemRef}
			onMouseEnter={subMenu ? handleMouseEnter : () => ""}
			onMouseLeave={subMenu ? handleMouseLeave : () => ""}
			className={`${showSubItems ? "expanded" : ""}`}>
			<Link to={link}>
				{title}{" "}
				<span ref={subMenuDropdownRef} className="open-dropdown">
					{subMenu ? (
						<i className="fa fa-angle-down" onClick={() => setShowSubItems((prev) => !prev)}></i>
					) : (
						""
					)}
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

export default NavItem;
