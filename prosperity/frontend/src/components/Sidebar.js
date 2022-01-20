import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import SchoolIcon from '@mui/icons-material/School';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';

function Sidebar() {

    return (
        <div className='sidebar'>
            <SidebarRow src='.\static\images\mk.jpg' title='M-Leader' />
            <SidebarRow Icon={SchoolIcon} title='Edu Center' />
            <SidebarRow Icon={LocalLibraryIcon} title='Service Request' />
            <SidebarRow Icon={PeopleIcon} title='Network' />
            <SidebarRow Icon={ChatIcon} title='Chat' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={InfoIcon} title='About-us' />
            <SidebarRow Icon={ExpandMoreIcon} title='Marketplace' /> 
            <hr className='sidebarHr'/>

            <ul className='sidebarFriendList'>
                <li className='sidebarFriend'>
                    <Avatar className='sidebarFriendImg' src='.\static\images\ronaldo.jpg' alt='' />
                    <span className='sidebarFriendName'>Ronaldo</span>
                </li>

                <li className='sidebarFriend'>
                    <Avatar className='sidebarFriendImg' src='.\static\images\ronaldo.jpg' alt='' />
                    <span className='sidebarFriendName'>Ronaldo</span>
                </li>

                <li className='sidebarFriend'>
                    <Avatar className='sidebarFriendImg' src='.\static\images\ronaldo.jpg' alt='' />
                    <span className='sidebarFriendName'>Ronaldo</span>
                </li>

                <li className='sidebarFriend'>
                    <Avatar className='sidebarFriendImg' src='.\static\images\ronaldo.jpg' alt='' />
                    <span className='sidebarFriendName'>Ronaldo</span>
                </li>

                <li className='sidebarFriend'>
                    <Avatar className='sidebarFriendImg' src='.\static\images\ronaldo.jpg' alt='' />
                    <span className='sidebarFriendName'>Ronaldo</span>
                </li>

                <li className='sidebarFriend'>
                    <Avatar className='sidebarFriendImg' src='.\static\images\ronaldo.jpg' alt='' />
                    <span className='sidebarFriendName'>Ronaldo</span>
                </li>

                <li className='sidebarFriend'>
                    <Avatar className='sidebarFriendImg' src='.\static\images\ronaldo.jpg' alt='' />
                    <span className='sidebarFriendName'>Ronaldo</span>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;
