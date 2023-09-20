import React from "react";
import { useSortable } from "@dnd-kit/sortable";

const SortableImage = ({ id, url, alt, tags, index }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	const style = {
		transform: transform
			? `translate(${transform.x}px, ${transform.y}px)`
			: "",
		transition: transition || "",
	};

	return (
		<div
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			style={style}
			className="relative overflow-hidden rounded-md shadow-md"
		>
			<img src={url} alt={alt} className="w-full h-auto" />
			<div className="absolute bottom-0 left-0 right-0 p-2 text-sm text-center text-white bg-black">
				{tags}
			</div>
		</div>
	);
};

export default SortableImage;
