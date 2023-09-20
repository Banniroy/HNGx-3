import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase/firebaseStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/UseAuth";

const Login = () => {
	const { setAuth } = useAuth();
	const errRef = useRef();
	const userRef = useRef();

	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		setErrMsg("");
	}, [email, password]);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	const signIn = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			setEmail("");
			setPassword("");
			const user = userCredential.user;
			setAuth({ auth: user });
			navigate(from, { replace: true });
		} catch (error) {
			setIsLoading(false);
			setErrMsg(error.message);
		}
	};

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	return (
		<section className="flex justify-center w-full h-screen">
			<section className="lg:flex bg-sky-950 flex-col items-center justify-center hidden w-2/3">
				<p className="text-slate-50 text-4xl">Welcome Back!</p>
				<h1 className="bg-inherit text-[#9520b2] text-7xl font-semibold">
					PrycyiMage
				</h1>
			</section>

			<section className="relative flex flex-col items-center justify-center w-1/2 h-screen bg-white">
				<div className="hidden lg:flex absolute h-60 rounded-r-[50%] -left-10 w-20 bg-sky-950"></div>
				<form
					onSubmit={signIn}
					className="h-[77vh] w-[350px] rounded bg-slate-50 shadow-md py-6 flex flex-col items-center "
				>
					<div className="h-1/4 bg-inherit flex flex-col items-center justify-center w-full gap-4 text-blue-800">
						<div className="flex items-center justify-center">
							<span className="md:h-12 md:w-12 flex items-center justify-center w-10 h-10 text-2xl text-black rounded-full">
								<FontAwesomeIcon
									icon={faImages}
									className="text-blue-800"
								/>
							</span>
							<h2 className="bg-inherit text-2xl font-semibold">
								PrycyiMage
							</h2>
						</div>
						{errMsg && (
							<p
								ref={errRef}
								className="text-red-600"
								aria-live="assertive"
							>
								{errMsg}
							</p>
						)}
					</div>

					<section className="h-4/5 bg-inherit flex flex-col items-center gap-12 pt-8">
						{/* Email input */}
						<section className="bg-inherit w-full p-1">
							<label className="hidden" htmlFor="Email">
								Email
							</label>
							<input
								className="border-sky-950 w-full h-12 px-8 py-3 border outline-none"
								type="text"
								name="Email"
								id="Email"
								ref={userRef}
								placeholder="Your Email"
								required
								autoComplete="off"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</section>

						{/* Password input */}
						<section className="bg-inherit w-full p-1">
							<label className="hidden" htmlFor="password">
								Password
							</label>
							<input
								className="border-sky-950 w-full h-12 px-8 py-3 border outline-none"
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</section>

						{/* Submit button */}
						<button
							type="submit"
							className="hover:opacity-95 focus-within:opacity-95 w-full h-12 text-white bg-blue-800 border-none cursor-pointer"
							disabled={isLoading}
						>
							{isLoading ? "Logging in..." : "Log In"}
						</button>
					</section>
				</form>
			</section>
		</section>
	);
};

export default Login;
