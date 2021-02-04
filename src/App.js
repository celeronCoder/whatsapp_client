import React, { useState ,useEffect } from "react"
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from "./components/Chat";
import Pusher from "pusher-js";
import axios from "./axios.js";

function App() {

	const [messages, setMessages] = useState([]);

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
			// alert(JSON.stringify(newMessage));
			setMessages([...messages, newMessage]); // ...messages means keep the previous ones and add the new one to the messages state array

		});

		// cleanup function 
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		}

	},[messages]);

	console.log(messages);
	
	return (
		<div className="app">
		<div className="app__body">
			{/* Sidebar */}
			<Sidebar />
			{/* Chat Component */}
			<Chat messages={messages} />
		</div>
		</div>
	);
}

export default App;
