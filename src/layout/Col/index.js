import React from "react";

const Col = (props) => {
	const { children, className } = props;
	return <div className={className}>{children}</div>;
};

export default Col;
