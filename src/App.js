// * React-Hooks 
import React, { useState ,useEffect } from "react";

// * StyleSheet 
import './App.css';

// * App components 
import Sidebar from './components/Sidebar';
import Chat from "./components/Chat";
import SignIn from "./product/signIn";

// * Importing pusher for the realtimeDB and axios for HTTP-XMLRequests
import Pusher from "pusher-js";
import axios from "./axios.js"; // local axios.js

// * Importing auth essentials
import { auth, GoogleAuth, EmailAuth } from "./firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUsers, setUserLogOutState, selectUserEmail, selectUserName } from "./features/userSlice"; 


function App() {

	//  * state of the messages of a room
	const [messages, setMessages] = useState([]);

	// * using axios in useEffect to fetch data when the db is changed
	useEffect(() => {
		axios.get("/api/v1/messages/sync")
			.then(response => {
				setMessages(response.data);
			})
	},[]);

	useEffect(() => {

		const pusher = new Pusher("3d0dc6da3b786599a8c2", {
			cluster: "ap2"
		});
		
		const channel = pusher.subscribe('messages');
		
		channel.bind('inserted', function(newMessage) {

			// * ...messages means keep the previous ones and add the new one to the messages state array.
			setMessages([...messages, newMessage]); 

		});

		// * cleanup function 
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		}

	},[messages]); // * passing the message state in the useEffect to run pusher on messages

	// console.log(messages);

	// configuring SignIn and SignOut
	
	const dispatch = useDispatch();

	const userName = useSelector(selectUserName);
	const userEmail = useSelector(selectUserEmail);

	const handleSignIn = () => {
		auth.signInWithPopup(GoogleAuth).then( (result) => {
			dispatch(setActiveUsers({
				userName: result.user.displayName,
				userEmail: result.user.email
			}))
		})
	};

	const handleEmailSignIn = () => {
		auth.signInWithEmailAndPassword(EmailAuth)
		.then(result => {
			console.log(result);
		})
		.catch(err => console.error(err))
	}

	const handleSignOut = () => {
		auth.signOut()
		.then(() => dispatch(setUserLogOutState() ) )
		.catch((err) => alert(err.message));
	};
	
	return (
		<div className="app">
			{
				userName ? <div className="app__body">
							<button id="signOut" onClick={ handleSignOut }>Sign Out</button>

							{/* Sidebar */}
							<Sidebar />

							{/* Chat Component */}
							<Chat messages={messages} />
						</div>
				: <SignIn handleSignIn={ handleSignIn }/>
			}
		</div>
	);
}

export default App;
