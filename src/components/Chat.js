import React, { useState } from 'react';
import "./css/chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/MicNone';
import axios from "../axios";

function Chat({messages}) {

	const [input, setInput] = useState([])

	const sendMessage = async (e) => {
		e.preventDefault();

		await axios.post("/api/v1/messages/new", {
			message: input,
			name: "Author",
			timestamp: "Just Now!",
			received: false
		})

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
				{messages.map((message) => {
					return (
					<p 
						className={`chat__message ${!message.received && "chat__receiver"}`}
					>
						<span className="chat__name">{message.name}</span>
						{message.message}
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
            		<input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
            		<button onClick={sendMessage} type="submit">Send a message</button>
            	</form>
            	<IconButton>
            		<MicNoneIcon />
            	</IconButton>
            </div>
        </div>
    );
};

export default Chat;