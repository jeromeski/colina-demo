import React, { Fragment } from "react";
import Col from "../../../layout/Col";

const CardList = ({ cards, resourceName, itemComponent: ItemComponent }) => {
	return (
		<Fragment>
			{cards.map((card) => (
				<Col key={card.id} className={`col-sm-6 ${card.isBig ? "col-md-6" : "col-md-4"}`}>
					<ItemComponent {...{ [resourceName]: card }} />
				</Col>
			))}
		</Fragment>
	);
};

export default CardList;
