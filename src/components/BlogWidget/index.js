import React, { Fragment } from "react";

const BlogWidget = ({ cards, resourceName, itemComponent: ItemComponent }) => {
	return (
		<Fragment>
			{cards.map((card) => (
				<ItemComponent key={card.id} {...{ [resourceName]: card }} />
			))}
		</Fragment>
	);
};

export default BlogWidget;
