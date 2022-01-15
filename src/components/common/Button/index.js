import React from "react";
import "./button.module.css";

const Button = (props) => {
	const { title, className } = props;
	return (
		<a href="#!" className={className}>
			{title}
		</a>
	);
};

export default Button;
