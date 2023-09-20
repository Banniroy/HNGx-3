import React, { useState, useContext, useEffect } from "react";
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import CustomLoader from "./Skeleton/CustomLoader";
import DataContext from "../context/DataContext";
import SortableImage from "./SortableImage";

const Card = () => {
	const { images, loading } = useContext(DataContext);

	const [searchQuery, setSearchQuery] = useState("");
	const [imageOrder, setImageOrder] = useState([]);

	// Initialize imageOrder to match the order of images
	useEffect(() => {
		setImageOrder(images.map((image) => image.id));
	}, [images]);

	// Filter images based on searchQuery
	const filteredImages = imageOrder
		.map((imageId) => images.find((image) => image.id === imageId))
		.filter((image) =>
			image.tags.toLowerCase().includes(searchQuery.toLowerCase())
		);

	// Drag-and-drop functionality
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor)
	);

	const handleDragEnd = ({ active, over }) => {
		if (active.id !== over.id) {
			setImageOrder((items) => {
				const oldIndex = items.indexOf(active.id);
				const newIndex = items.indexOf(over.id);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	};

	return (
		<div className="max-w-screen-lg p-4 mx-auto">
			<div className="mb-4">
				<input
					type="text"
					placeholder="Search by tag"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="focus:outline-none focus:border-blue-400 w-full px-4 py-2 border rounded-md"
				/>
			</div>
			{loading ? (
				<CustomLoader numberOfCards={36} />
			) : (
				<DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredImages.map((image, index) => (
							<SortableImage
								key={image.id}
								id={image.id}
								url={image.url}
								alt={image.alt}
								tags={image.tags}
								index={index}
							/>
						))}
					</div>
				</DndContext>
			)}
		</div>
	);
};

export default Card;
