import React from "react";

const Button = (props) => {
	const { title, className } = props;
	return (
		<a href="#!" className={className}>
			{title}
		</a>
	);
};

export default Button;
