import React from "react";
import Button from "../../Button";

const Card = ({ card }) => {
	const { title, subTitle, price, imgUrl } = card;
	return (
		<div className="item">
			<article>
				<div className="image">
					<img src={require(`../../../../assets/images${imgUrl}`)} alt="" />
				</div>
				<div className="details">
					<div className="text">
						<h2 className="title">
							<a href="room-overview.html">{title}</a>
						</h2>
						<p>{subTitle}</p>
					</div>
					<div className="book">
						<div>
							<Button className="btn btn-main" title="Book now" />
						</div>
						<div>
							<span className="price h2">{price}</span>
							<span>per night</span>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default Card;
