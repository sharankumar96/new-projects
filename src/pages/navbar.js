import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
         <Link> <li style={liStyle}><a href="#home">Home</a></li></Link>
          <Link><li style={liStyle}><a href="#about">AboutUs</a></li></Link>
         <Link ><li style={liStyle}><a href="#contact">ContactUs</a></li></Link>
        </ul>
      </nav>
    </div>
  );
}

// Define styles as objects
const navStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 10px',
};

export default Navbar;
