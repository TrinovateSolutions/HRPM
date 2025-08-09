import { useState } from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import './Layout.css';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const logout = () => {
    alert('Logging out...');
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>HRMS</h2>
      </div>
      <div className="profile-section">
        <MdOutlineAccountCircle 
            className="profile-icon"
            onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <button style={{color: 'black'}} onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}