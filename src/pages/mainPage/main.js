import Logo from '../../assets/general/prokerinLogo.png'
import React, { Component } from 'react';
import Icon from '@mdi/react';
import {mdiHome} from '@mdi/js';

function Main() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="h-screen w-[13%] bg-white">
        <img src={Logo} className="px-[15%] pt-[50px]" />
        <div className="flex flex-col">
 
        </div>
      </div>
    </div>
  );
}

export default Main;
