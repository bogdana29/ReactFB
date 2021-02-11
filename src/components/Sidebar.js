import { EmojiFlags } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import MailIcon from '@material-ui/icons/Mail'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import { useStateValue } from '../StateProvider'
function Sidebar(){
    const [{user},dispatch ] = useStateValue();

    return (     
    <div className="sidebar">  
        <SidebarRow 
        Icon ={PeopleIcon}
        title={user.displayName} />
        
        <SidebarRow Icon ={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon ={PeopleIcon} title="Friends" />
        <SidebarRow Icon ={MailIcon} title="Mails" src ="/mails"/>
        <SidebarRow Icon ={ChatIcon} title="Groups" src = "/groups"/>
        <SidebarRow Icon ={StorefrontIcon} title="Comunity" src = "/comunity"/>

    </div> 
    )
}
export default Sidebar;