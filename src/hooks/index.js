import { useState, useEffect } from "react";

function getClientWidth() {
	const { innerWidth: width } = window;
	return width;
}

export function useWindowClientWidth() {
	const [width, setWidth] = useState(getClientWidth());

	useEffect(() => {}, []);
}
