import React from "react";

const PageHeader = ({ bgPageHeaderImg, title, subTitle }) => {
	return (
		<div className="page-header" style={{ backgroundImage: `url(${bgPageHeaderImg})` }}>
			<div className="container">
				<h2 className="title">{title}</h2>
				<p>{subTitle}</p>
			</div>
		</div>
	);
};

export default PageHeader;
