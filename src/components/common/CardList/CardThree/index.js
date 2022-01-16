import React from "react";

const CardThree = ({ card }) => {
	const { title, imgUrl, day, month, year } = card;
	return (
		<div className="col-sm-4">
			<a href="blog-item.html">
				<article>
					<div className="image">
						<img src={require(`../../../../assets/images${imgUrl}`)} alt="" />
					</div>
					<div className="text">
						<div className="time">
							<span>{day}</span>
							<span>{month}</span>
							<span>{year}</span>
						</div>
						<h2 className="h5 title">{title}</h2>
					</div>
				</article>
			</a>
		</div>
	);
};

export default CardThree;
