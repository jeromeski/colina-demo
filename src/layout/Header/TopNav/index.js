import React from "react";

const TopNav = () => {
	return (
		<nav className="navigation-top clearfix">
			<div className="navigation-top-left">
				<a className="box" href="#!">
					<i className="fa fa-facebook"></i>
				</a>
				<a className="box" href="#!">
					<i className="fa fa-twitter"></i>
				</a>
				<a className="box" href="#!">
					<i className="fa fa-youtube"></i>
				</a>
			</div>

			<div className="navigation-top-right">
				<a className="box" href="#!">
					<i className="icon icon-star"></i>
					Special offers
				</a>
				<a className="box" href="#!">
					<i className="icon icon-tag"></i>
					Reservations
				</a>
				<a className="box" href="#!">
					<i className="icon icon-phone-handset"></i>
					(01) 252-3333
				</a>
			</div>
		</nav>
	);
};

export default TopNav;
