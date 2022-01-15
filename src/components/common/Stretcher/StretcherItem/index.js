import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const StretcherItem = ({ facility, handleEnter, handleLeave }) => {
	const { id, title, subTitle, url, imgUrl } = facility;

	return (
		<Fragment>
			{subTitle ? (
				<li
					onMouseEnter={handleEnter}
					onMouseLeave={handleLeave}
					key={id}
					className="stretcher-item"
					style={{ backgroundImage: `url(${require("../../../../assets/images/" + imgUrl)})` }}>
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

export default StretcherItem;
