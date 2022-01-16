import React, { Fragment } from "react";

const SectionHeaderContent = (props) => {
	const { heading1, heading2, btnTitle, desc } = props.content;
	return (
		<Fragment>
			<h2 className="title">
				<span>{heading1}</span> {heading2}{" "}
				<a href="#!" className="btn btn-sm btn-clean-dark">
					{btnTitle}
				</a>
			</h2>
			<p>{desc}</p>
		</Fragment>
	);
};

export default SectionHeaderContent;
