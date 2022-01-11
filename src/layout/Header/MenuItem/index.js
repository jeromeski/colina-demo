import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { slideUp, slideDown } from "es6-slide-up-down";

const MenuItem = (props) => {
	const { id, title, link, subMenu } = props;
	const [showSubItems, setShowSubItems] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

	let itemRef = useRef([]);
	let subDropdownRef = useRef([]);

	const isMobile = window.innerWidth <= 992;


	// Desktop - Dropdown menu
	//----------------------------------------------------------------

	const handleMouseEnter = () => {
    if(isMobile) {
      return
    }
    setShowSubmenu(true);
	};

	const handleMouseLeave = () => {
    if(isMobile) {
      return
    }
    setShowSubmenu(false);
	};


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
			ref={(el) => (itemRef.current[id] = el)}
			onMouseEnter={subMenu ? handleMouseEnter : () => ""}
			onMouseLeave={subMenu ? handleMouseLeave : () => ""}
			className={`${showSubItems ? "expanded" : ""} ${showSubmenu ? "hovered" : ""}`}>
			<a href="#!">
				{title}{" "}
				<span
					id={id}
					ref={(spanEl) => (subDropdownRef.current[id] = spanEl)}
					className="open-dropdown">
					<i className="fa fa-angle-down" onClick={handleClick}></i>
				</span>
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
