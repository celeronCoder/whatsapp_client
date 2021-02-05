import React from "react";

// * StyleSheet Import
import "./css/sidebar.css";

// * Component Import
import SidebarChat from "./SidebarChat";

// * Material UI Imports
import {Avatar, IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar
                    src="https://avatars.dicebear.com/api/human/me.svg"
                />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search or Start a new chat" />
                </div>
            </div>

            <div className="sidebar__chats">
            
            {/* TODO: render the rooms on the sidebar which are on the db and the user is authenticated to! */}
            
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            
        </div>
    );
};

export default Sidebar;