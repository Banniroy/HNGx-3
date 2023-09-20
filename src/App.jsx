import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/AuthLogin/RequireAuth";
import Home from "./components/Home";
import Login from "./components/AuthLogin/Login";

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<main className="w-full h-full">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route element={<RequireAuth />}>
						<Route exact path="/" element={<Home />} />
					</Route>
				</Route>
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</main>
	);
}

export default App;
