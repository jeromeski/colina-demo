import React from "react";

const MenuButton = ({ headerRef, toggle, setToggle }) => {
	const handleToggle = (e) => {
		const navbar = headerRef.current;
		navbar.classList.add("sticked");

		setToggle((prev) => !prev);
	};
	return (
		<div className={`${toggle ? "open" : ""} toggle-menu`} onClick={handleToggle}>
			<i className="icon icon-menu"></i>
		</div>
	);
};

export default MenuButton;
