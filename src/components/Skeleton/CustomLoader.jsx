import React from "react";

const CustomLoader = ({ numberOfCards }) => {
	const loadingCards = Array.from({ length: numberOfCards }).map(
		(_, index) => (
			<div
				key={index}
				className="md:max-w-sm w-full max-w-xs p-4 mx-auto mb-4 bg-white shadow-md"
			>
				<div className="animate-pulse w-full h-40 mb-4 bg-gray-200"></div>
				<div className="animate-pulse w-1/2 h-4 mb-2 bg-gray-200"></div>
				<div className="animate-pulse w-1/3 h-4 bg-gray-200"></div>
			</div>
		)
	);

	return (
		<div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4">
			{loadingCards}
		</div>
	);
};

export default CustomLoader;
