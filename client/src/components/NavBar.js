import {useState, useEffect} from 'react';
import {StyledNavBar} from '../styles';
import {NavLink} from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa';
import {GiMicrophone} from 'react-icons/gi'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {RiPlayListFill} from 'react-icons/ri';
const NavBar = () => {

    return (
        <StyledNavBar>
            <div className ="nav__logo" >
                <img src="https://download.logo.wine/logo/Spotify/Spotify-Icon-Logo.wine.png" title="Spotify Logo" alt ="Spotify Logo"/>
            </div>
            <ul className="nav__list">
                <li><NavLink className="nav__item" exact to = "/" activeClassName="active">
                <FaUserAlt/>
                Profile
                </NavLink>
                </li>
                <li>
                <NavLink className="nav__item" exact to = "/top-artists" activeClassName="active">
                <GiMicrophone/>
                Top Artists
                </NavLink>
                </li>
                <li>
                <NavLink className="nav__item" exact to = "/top-tracks" activeClassName="active">
                <BsMusicNoteBeamed/>
                Top Tracks
                </NavLink>
                </li>
                <li><NavLink className="nav__item" to = "/playlists" activeClassName="active">
                <RiPlayListFill/>
                Playlists
                </NavLink></li>
            </ul>
            <div></div>
        </StyledNavBar>
    );
}

export default NavBar;