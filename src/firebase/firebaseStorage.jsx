import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDMKAE83_bdKt3wwPWyB3AbSVBtP62saW4",
	authDomain: "prycycle-website-3d981.firebaseapp.com",
	databaseURL: "https://prycycle-website-3d981-default-rtdb.firebaseio.com",
	projectId: "prycycle-website-3d981",
	storageBucket: "prycycle-website-3d981.appspot.com",
	messagingSenderId: "639067048319",
	appId: "1:639067048319:web:97dc2bb0381fb2df0ff24a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const auth = getAuth(app);

export { auth };

// user@example.com
// 1Password
