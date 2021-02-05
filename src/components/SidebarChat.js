import React, { useEffect, useState } from 'react'
import "./css/sidebarChat.css"
import { Avatar, IconButton } from "@material-ui/core"
import GroupAddIcon from '@material-ui/icons/GroupAdd';

function SidebarChat({addNewChat}) { // * @param don't forget to put the parameter of the functional components within curly   braces {} unless won't work

    // :using react useState hook to save the state of the seed to have different api calls for each room.
    const [seed, setSeed] = useState([]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[])

    const createChat = () => {
        const newRoomName = prompt("Please enter the new room name");

        if (newRoomName) {
            // TODO: create a new room in the database.
        }
    }

    // reusing the SidebarChat prop to create the add new chat UI prop.

    if (!addNewChat) {
        return (
            <div className="sidebarChat">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`} // * In JSX we can't use template-literals directly it must pe put within the {} first.
                />
                <div className="sidebarChat__info">
                    <h2>Room Name</h2>
                    <p>This is the last message</p>
                </div>
            </div>
        )
    } else if (addNewChat) {
        return (
            <div 
                onClick={createChat}
                className="sidebarChat__add"
            >
                <IconButton>
                    <GroupAddIcon />
                </IconButton>
            </div>
        )
    }
}

export default SidebarChat;