import React from "react";
import { getSiblings } from "../../..//utilities";

const Stretcher = ({ facilities, resourceName, itemComponent: ItemComponent }) => {
	const handleEnter = (e) => {
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
