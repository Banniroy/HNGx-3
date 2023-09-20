import { useEffect, useState, useContext } from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	return (
		<main className=" relative w-full h-full">
			<Header />
			<h1 className="my-4 text-3xl font-semibold text-center">
				Image Gallery
			</h1>
			<Card />
			<Footer />
		</main>
	);
};

export default Home;
