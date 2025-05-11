import React from 'react';
import './header.css';
import NetflixLogo from '../../assets/images/Netflix_Logo_RGB.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            <ul className="header_nav_links">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>

        </div>
        <div className="header_right">
            <ul className="header_icons">
                <li><SearchIcon /></li>
                <li><NotificationsNoneIcon /></li>
                <li><AccountBoxIcon /></li>
                <li><ArrowDropDownIcon /></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
