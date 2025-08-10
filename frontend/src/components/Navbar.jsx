import { useState } from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import './Layout.css';
import ts from '../assets/ts.png';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const logout = () => {
    alert('Logging out...');
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* <h2>HRMS</h2> */}
        <img className="logos" src={ts} alt="Trinovate Solutions" />
      </div>
      <div className="profile-section">
        <MdOutlineAccountCircle 
            className="profile-icon"
            onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}