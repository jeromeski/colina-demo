import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { slideUp, slideDown } from "es6-slide-up-down";
import { useHover } from '../../../hooks';


const MenuItem = (props) => {
	const { id, title, subMenu } = props;
	const [showSubItems, setShowSubItems] = useState(false);

  const [ref, value] = useHover()

	let subDropdownRef = useRef([]);

	const isMobile = window.innerWidth <= 992;

	// Mobile - Dropdown menu
	//----------------------------------------------------------------

	useEffect(() => {
		if (showSubItems && isMobile) {
			const _drop = subDropdownRef.current[id].closest("li").querySelector("ul");
			slideDown(_drop);
		}

    if (!showSubItems && isMobile && subDropdownRef.current[id]) {
			const _drop = subDropdownRef.current[id].closest("li").querySelector("ul");
			slideUp(_drop);
		}

	}, [showSubItems, subDropdownRef, isMobile, id]);

	const handleClick = (e) => {
		setShowSubItems((prev) => !prev);
	};

	return (
		<li
			key={id}
      ref={ref}
			className={`${showSubItems ? "expanded" : ""} ${subMenu && value ? "hovered" : ""}`}>
			<a href="#!">
				{title}{" "}
			{ subMenu && <span
					id={id}
					ref={(spanEl) => (subDropdownRef.current[id] = spanEl)}
					className="open-dropdown">
					<i className="fa fa-angle-down" onClick={handleClick}></i>
				</span>}
			</a>
			<ul>
				{subMenu &&
					subMenu.map((subMenuItem, idx) => (
						<li key={idx}>
							<a href={subMenuItem.link}>{subMenuItem.title}</a>
						</li>
					))}
			</ul>
		</li>
	);
};

export default MenuItem;
