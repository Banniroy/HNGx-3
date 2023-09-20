import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main className="flex justify-between w-full h-full">
			<Outlet />
		</main>
	);
};

export default Layout;
