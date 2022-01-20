import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {

    return (
        <div className='header'>
            <div className='header__left'>
                <img src='.\static\images\logo.png' alt=''/>
                <div className='header__input'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>

            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SchoolIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <MenuBookIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SupervisorAccountIcon fontSize='large'/>
                </div>

            </div>

            <div className='header__right'>
                <div className='header__info'>
                <Avatar src='.\static\images\mk.jpg' />
                <h4>Mkhilil</h4>
                </div>
                
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
            
        </div>
    )
}

export default Header;
