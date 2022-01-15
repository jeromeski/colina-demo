export const getClientWidth = () => {
	const { innerWidth: width } = window;
	return width;
};

export const getSiblings = function (el) {
	if (el.parentNode === null) return [];
	// standard filter use --> [].filter(item => {...})
	return Array.prototype.filter.call(el.parentNode.children, function (child) {
		return child !== el;
	});
};
