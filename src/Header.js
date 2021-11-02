import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img 
            className='header_logo'
            src='https://www.freepnglogos.com/uploads/telegram-logo-png-0.png'/>
       <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header
