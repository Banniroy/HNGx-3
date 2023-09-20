import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<header className="md:w-full md:flex-row md:static sticky top-0 z-50 flex flex-row-reverse items-center justify-between w-full h-16 px-4 text-white bg-blue-800">
			<div className="md:hidden w-[10%]"></div>
			<Link
				to="/"
				className="w-[40%] md:w-[20%] flex items-center  md:justify-end gap-2 md:gap-4"
			>
				<span className="md:h-12 md:w-12 flex items-center justify-center w-10 h-10 text-2xl text-white rounded-full">
					<FontAwesomeIcon icon={faImages} />
				</span>
				<span className="text-2xl">PrycyiMage</span>
			</Link>
			<div className="flex items-center justify-end md:justify-around w-[30%] md:w-[20%] flex-row-reverse md:flex-row">
				<button className="md:block hidden">
					<Link to="/login">Sign In</Link>
				</button>
				<Link className="rounded-2xl border-[1px] relative flex items-center justify-center w-10 h-10">
					<span className="w-[18px] h-[2px] absolute rounded bg-white -translate-y-[5px]"></span>
					<span className="w-[18px] h-[2px] absolute rounded bg-white translate-y-[5px]"></span>
				</Link>
			</div>
		</header>
	);
};

export default Header;
