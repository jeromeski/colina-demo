import React from "react";
import Col from "../../../../layout/Col";
import { useHover } from "../../../../hooks";

const CardTwo = ({ card }) => {
	const { title, imgUrl, isLongCol } = card;
	const [hoverRef, isActive] = useHover();
	return (
		<Col className={`${isLongCol ? "col-xs-12 col-md-8" : "col-xs-6 col-md-4"}`}>
			<figure ref={hoverRef} className={isActive ? "active" : ""}>
				<figcaption
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
