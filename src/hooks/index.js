import { useState, useEffect, useRef } from "react";

export const useHover = () => {
	const [value, setValue] = useState(false);

	const ref = useRef(null);

	const handleMouseEnter = () => {
		setValue(true);
	};

	const handleMouseLeave = () => {
		setValue(false);
	};

	useEffect(() => {
		const node = ref.current;
		if (ref.current) {
			node.addEventListener("mouseenter", handleMouseEnter);
			node.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			node.removeEventListener("mouseenter", handleMouseEnter);
			node.removeEventListener("mouseleave", handleMouseLeave);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref.current]);

	return [ref, value];
};
