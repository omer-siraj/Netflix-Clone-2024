import React from 'react';
import './header.css';
import NetflixLogo from '../../assets/images/Netflix_Logo_RGB.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
  return (
    <header className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          <nav>
            <ul className="header_nav_links">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </nav>
        </div>
        <div className="header_right">
          <ul className="header_icons">
            <li title="Search"><SearchIcon /></li>
            <li title="Notifications"><NotificationsNoneIcon /></li>
            <li title="Account"><AccountBoxIcon /></li>
            <li title="More Options"><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
