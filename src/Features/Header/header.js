import React, { useState } from 'react';
import Logo from '../../Assets/General/logo.svg';
import Search from '../../Assets/Header/search.svg';

function Header() {

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // You can add further logic here if needed (e.g., perform search operation).
  };

  return (
    <div className="bg-darkblue w-full h-[100px] flex items-center">
      <img src={Logo} alt="logo" className="ml-[3%] w-[139px] h-[48px]" />
        <div className="h-[50px] w-[30%] ml-[7%] bg-white border-black border rounded-full items-center flex">
          <img src={Search} className="my-[3px] ml-[15px] w-[36px] h-[36px]" />
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            className="ml-[5px] h-[45px] w-[82%] text-[16px] outline-none"
            placeholder="Cari Proker"/>
        </div>
    </div>
  );
}

export default Header;
