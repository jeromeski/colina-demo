import React, { useEffect, useRef, useState } from "react";

const Stretcher = ({ facilities, resourceName, itemComponent: ItemComponent }) => {
	const handleEnter = (e) => {
		// add remove class to all sibling elements
		// add active class to selected element
		// console.log(stretcherRef);
	};

	const handleLeave = (e) => {};

	return (
		<ul className="stretcher">
			{facilities.map((facility) => (
				<ItemComponent
					key={facility.id}
					{...{ [resourceName]: facility }}
					handleEnter={handleEnter}
					handleLeave={handleLeave}
				/>
			))}
		</ul>
	);
};

export default Stretcher;
