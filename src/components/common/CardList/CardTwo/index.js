import React, { useState } from "react";
import Col from "../../../../layout/Col";

const CardTwo = ({ card }) => {
	const { title, imgUrl, isLongCol } = card;
	const [active, setActive] = useState(false);
	return (
		<Col className={`${isLongCol ? "col-xs-12 col-md-8" : "col-xs-6 col-md-4"}`}>
			<figure className={active ? "active" : ""}>
				<figcaption
					onMouseEnter={() => setActive(true)}
					onMouseLeave={() => setActive(false)}
					style={{ backgroundImage: `url(${require("../../../../assets/images" + imgUrl)})` }}>
					<img src={require(`../../../../assets/images${imgUrl}`)} alt="" />
				</figcaption>
				<a href="#!" className="btn btn-clean" onClick={() => ""}>
					{title}
				</a>
			</figure>
		</Col>
	);
};

export default CardTwo;
