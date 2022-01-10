import React from "react";
import Logo from "../Logo";
import MenuButton from "../MenuButton";
import MenuLeft from "../MenuLeft";
import MenuRight from "../MenuRight";

const NavMenu = ({ toggleMenu, setToggleMenu, headerRef }) => {
	return (
		<nav className="navigation-main clearfix">
			<Logo />
			<MenuButton toggle={toggleMenu} setToggle={setToggleMenu} headerRef={headerRef} />
			<div className={`${toggleMenu ? "open" : ""} navigation-block clearfix`}>
				<MenuLeft />
				<MenuRight />
			</div>
		</nav>
	);
};

export default NavMenu;
