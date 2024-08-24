import React, { useState } from 'react';
import logo from './../assets/Images/logo.jpg';
import { HiHome, HiMagnifyingGlass } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import ProfileModal from './ProfileModal'; // Importa el modal

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => setIsModalOpen(true);
  const handleMouseLeave = () => setIsModalOpen(false);

  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    // Agrega más elementos del menú aquí si es necesario
  ]

  return (
    <div className="header-container">
      <div className="nav-left">
        <img src={logo} className="header-logo" />
        {menu.map((item) => (
          <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
        ))}
      </div>
      <div 
        className="profile-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6g9BWr61gs6KYIq3zjFEy36Z8OuOIJQ75A&s" 
          alt="Profile" 
          className="profile-icon" 
        />
        {isModalOpen && <ProfileModal />}
      </div>
    </div>
  );
}

export default Header;