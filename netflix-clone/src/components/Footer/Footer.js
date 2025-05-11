import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className="footer_links">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="service_code">
          <p>Service Code</p>
        </div>

        <div className="copy_write">
          &copy; 1997–2024 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
