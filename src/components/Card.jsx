import React, { useState, useContext, useEffect } from "react";
import CustomLoader from "./Skeleton/CustomLoader";
import DataContext from "../context/DataContext";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../Helpers/StrictModeDroppable";

const Card = () => {
	const { images, loading } = useContext(DataContext);

	const [searchQuery, setSearchQuery] = useState("");
	const [imageOrder, setImageOrder] = useState([]);
	const [isDraggingOver, setIsDraggingOver] = useState(false); // State for highlighting drop zone

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
				<div>
					<DragDropContext
						onDragStart={() => {
							setIsDraggingOver(true);
						}}
						onDragEnd={(result) => {
							setIsDraggingOver(false);
							// Rest of your code for handling the drag and drop
						}}
					>
						<Droppable droppableId="images">
							{(provided, snapshot) => (
								<section
									{...provided.droppableProps}
									ref={provided.innerRef}
									className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full ${
										snapshot.isDraggingOver
											? "border-4 border-dashed border-blue-400 rounded-md"
											: ""
									}`}
								>
									{filteredImages.map((image, index) => (
										<Draggable
											key={image.id}
											draggableId={image.id.toString()}
											index={index}
										>
											{(provided) => (
												<div
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
													className="relative overflow-hidden rounded-md shadow-md"
												>
													<img
														src={image.url}
														alt={image.alt}
														className="w-full h-auto"
													/>
													<div className="absolute bottom-0 left-0 right-0 p-2 text-sm text-center text-white bg-black">
														{image.tags}
													</div>
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</section>
							)}
						</Droppable>
					</DragDropContext>
				</div>
			)}
		</div>
	);
};

export default Card;
