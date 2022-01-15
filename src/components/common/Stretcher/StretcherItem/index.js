import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StretcherItem = ({ facility }, ref) => {
	const { id, title, subTitle, imgUrl, url } = facility;

	const items = document.querySelectorAll(".stretcher-item");

	const handleEnter = (e) => {
		//
		// items.forEach((item) => item.classList.add("inactive"));
		const targetEl = e.currentTarget;
		targetEl.classList.add("active");
		const siblings = getSiblings(targetEl);
		siblings.forEach((el) => el.classList.add("inactive"));
	};

	const handleLeave = (e) => {
		const targetEl = e.currentTarget;
		targetEl.classList.remove("active");
		const siblings = getSiblings(targetEl);
		siblings.forEach((el) => el.classList.remove("inactive"));
	};

	const getSiblings = function (el) {
		if (el.parentNode === null) return [];
		return Array.prototype.filter.call(el.parentNode.children, function (child) {
			return child !== el;
		});
	};

	return (
		<Fragment>
			{subTitle ? (
				<li
					onMouseEnter={handleEnter}
					onMouseLeave={handleLeave}
					key={id}
					className="stretcher-item"
					style={{ backgroundImage: `url(${require("../../../../assets/images/services-1.jpg")})` }}
					ref={ref}>
					<div className="stretcher-logo">
						<div className="text">
							<span className="text-intro h4">{title}</span>
						</div>
					</div>

					<figure>
						<h4>{title}</h4>
						<figcaption>{subTitle}</figcaption>
					</figure>
					<Link to={url}>Anchor link</Link>
				</li>
			) : (
				<li
					className="stretcher-item more"
					onMouseEnter={handleEnter}
					onMouseLeave={handleLeave}
					key={id}>
					<div className="more-icon">
						<span data-title-show="Show more" data-title-hide="+"></span>
					</div>
					<a href="#!">Anchor link</a>
				</li>
			)}
		</Fragment>
	);
};

const FFStretcherItem = React.forwardRef(StretcherItem);

export default FFStretcherItem;
