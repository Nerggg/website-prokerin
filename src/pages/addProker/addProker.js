import React, { useState } from 'react';
import SideBar from '../../components/sidebar/sidebarAddProker'

function AddProker() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="w-screen pb-[30px]">
        <div className="ml-[3%] mt-[40px] font-bold">Your organization already exist?</div>
          <div className="ml-[3%] w-[60%] h-[35px] rounded-lg bg-white border border-black">
            <input className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none" placeholder="Search for existing organization"/>
          </div>
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
        <p className="ml-[3%] font-bold mt-4">Upload your organization logo</p>
        <div className="ml-[3%] flex mt-[5px]">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {selectedFile && (
          <div className="flex justify-center mt-4">
            <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Logo" className="max-w-full h-auto" />
          </div>
        )}
        <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
        <div className="ml-[3%] font-bold">Enter your organization name</div>
          <div className="ml-[3%] w-[60%] h-[35px] rounded-lg bg-white border border-black">
            <input className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none" placeholder="Organization name"/>
          </div>
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
        <div className="ml-[3%] font-bold">Enter the Proker's title</div>
          <div className="ml-[3%] w-[60%] h-[35px] rounded-lg bg-white border border-black">
            <input className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none" placeholder="Proker's title"/>
          </div>
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
        <div className="ml-[3%] font-bold">Enter the Proker's content</div>
          <div className="ml-[3%] w-[60%] h-[185px] rounded-lg bg-white border border-black">
            <textarea className="ml-[1%] pt-[5px] pl-[5px] w-[95%] h-[180px] outline-none" placeholder="Proker's content"></textarea>
          </div>
      </div>
    </div>
  );
}

export default AddProker;
