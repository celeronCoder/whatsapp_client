// * React-Hooks Imports
import React, { useState } from 'react';

// * StyleSheet Import
import "./css/chat.css";

// * Material Ui Imports
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/MicNone';

// * Local Axios import for HTTP Request
import axios from "../axios";


function Chat({messages}) {

	// Using useState hook to get the input value of the chat message
	const [input, setInput] = useState([])

	const sendMessage = async (e) => {
		
		e.preventDefault();

		// * Must be asynchronous as we are posting data to the API

		// TODO: configure the timestamp value to match the one in the DB.
		// TODO: display the timestamp of the message as Just Now if the timestamp is less than 1s and that is the last message in the room.

		await axios.post("/api/v1/messages/new", {
			message: input,
			name: "me", 
			timestamp: "Just Now!",
			received: false
		})

		// * setting the input back to empty to clear the chat box after the message has been send!
		setInput('');
	}

    return (
        <div className="chat">
            <div className="chat__header">
				{/* Sync this room avatar to the current active room avatar */}
				<Avatar />

            	<div className="chat__headerInfo">
            		<h2>Room Name</h2>
            		<p>Last seen at....</p>
            	</div>

            	<div className="chat__headerRight">
            		<IconButton>
            			<SearchOutlined />
            		</IconButton>
            		<IconButton>
            			<AttachFile />
            		</IconButton>
            		<IconButton>
            			<MoreVert />
            		</IconButton>
            	</div>

            </div>

            <div div className="chat__body">
				{/* using map instead of forEach() cause map can return but forEach can't*/}
				
				{ messages.map((message) => {
					return (
					<p
						// * the chat__receiver must me applied to the msg only that the logged in user has not send
						className={`chat__message ${!message.received && "chat__receiver"}`}
					>
						<span className="chat__name">{ message.name }</span>
						{ message.message }
						<span className="chat__timestamp">
							{ message.timestamp }
						</span>
					</p>
					)
				})}
            </div>
            <div className="chat__footer">
            	<IconButton>
            		<InsertEmoticonIcon />
            	</IconButton>
            	<form>
            		<input value={ input } onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
            		<button onClick={ sendMessage } type="submit">Send a message</button>
            	</form>
            	<IconButton>
            		<MicNoneIcon />
            	</IconButton>
            </div>
        </div>
    );
};

export default Chat;