 
import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FlagIcon from '@material-ui/icons/Flag';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStateValue } from '../StateProvider'
function Header(){
    const [{user},dispatch ] = useStateValue();
    return (        
    <div className="header">
        <div className="header__left">
            <img src="./curc.jpeg"  alt="curc.jpeg" aria-hidden="true"  />
            <div className="header__input">
                <SearchIcon/>
                <input type = "text" placeholder="Cauta in portal" ></input>
            </div>
        </div>
        <div className="header__center">
            <div className="header__option">
                <HomeIcon/>
            </div>
            <div className="header__option"> 
                <NotificationsIcon/>
            </div>
            <div className="header__option"> 
                <FlagIcon/>
            </div>
            <div className="header__option"> 
                <GroupIcon/>
            </div>
            <div className="header__option"> 
                <PersonIcon/>
            </div>
        </div>
        <div className="header__right">
            <div className="header__info"> 
                <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                <IconButton>
                </IconButton>
                    <NotificationsActiveIcon/> 
                </IconButton>   
                <IconButton> 
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>        
    </div>    
    )
}
export default Header;