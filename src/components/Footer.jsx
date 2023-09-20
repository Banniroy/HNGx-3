import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="h-fit gap-7 flex flex-col items-center justify-center w-full text-gray-900 bg-white">
			<div className="flex justify-evenly items-center w-1/2 md:w-[30%] mt-40 text-2xl">
				<FontAwesomeIcon icon={faFacebook} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>
			<div className="md:w-3/5 justify-evenly flex items-center w-full">
				<Link>Conditions of Use</Link>
				<Link>Privacys & Policies</Link>
				<Link>Press Room</Link>
			</div>
			<div className="pb-40">
				&copy; 2022 Image Gallery by Ajibade Abdulmatin
			</div>
		</footer>
	);
};

export default Footer;
