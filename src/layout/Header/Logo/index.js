import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logoMobile from "../../../assets/images/logo-mobile.png";

const Logo = () => {
	return (
		<div className="logo animated fadeIn">
			<Link to="#!">
				<img className="logo-desktop" src={logo} alt="Alternate Text" />
				<img className="logo-mobile" src={logoMobile} alt="Alternate Text" />
			</Link>
		</div>
	);
};

export default Logo;
