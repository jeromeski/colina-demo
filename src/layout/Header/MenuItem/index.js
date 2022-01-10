import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slideUp, slideDown } from "es6-slide-up-down";

const MenuItem = (props) => {
	const { id, title, link, subMenu } = props;
	const [showSubItems, setShowSubItems] = useState(false);

	let itemRef = useRef([]);
	let subDropdownRef = useRef([]);

	const isDesktop = window.innerWidth >= 992;

	// Desktop - Dropdown menu
	//----------------------------------------------------------------

	const handleMouseEnter = () => {
		if (isDesktop) {
			itemRef.current[id].classList.add("hovered");
		}
		return false;
	};

	const handleMouseLeave = () => {
		if (isDesktop) {
			itemRef.current[id].classList.remove("hovered");
		}
		return false;
	};

	// Mobile - Dropdown menu
	//----------------------------------------------------------------

	useEffect(() => {
		if (showSubItems) {
			// Check if mobile or not
			if (window.innerWidth >= 992) {
				return false;
			}
			// Check if previous collapse is open

			// if open close it
			//  execute slidedown

			const _drop = subDropdownRef.current[id].closest("li").querySelector("ul");
			slideDown(_drop);
		}
		//

		if (!showSubItems && subDropdownRef.current[id]) {
			const _drop = subDropdownRef.current[id].closest("li").querySelector("ul");
			slideUp(_drop);
		}
	}, [showSubItems, subDropdownRef, id]);

	const handleClick = (e) => {
		setShowSubItems((prev) => !prev);
	};

	return (
		<li
			key={id}
			ref={(el) => (itemRef.current[id] = el)}
			onMouseEnter={subMenu ? handleMouseEnter : () => ""}
			onMouseLeave={subMenu ? handleMouseLeave : () => ""}
			className={`${showSubItems ? "expanded" : ""}`}>
			<Link to={link}>
				{title}{" "}
				<span id={id} ref={(el) => (subDropdownRef.current[id] = el)} className="open-dropdown">
					{subMenu ? <i className="fa fa-angle-down" onClick={handleClick}></i> : ""}
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

export default MenuItem;
