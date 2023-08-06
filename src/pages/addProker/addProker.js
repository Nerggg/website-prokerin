import React, { useState } from 'react';
import SideBar from '../../components/sidebar/sidebarAddProker'

function AddProker() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="w-screen pb-[30px]">
        <div className="ml-[3%] mt-[40px] font-bold">Your organization already exist?</div>
          <div className="ml-[3%] w-[60%] h-[35px] rounded-lg bg-white border border-black">
            <input className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none" placeholder="Search for exiting organization"/>
          </div>
        <p className="text-center font-bold mt-4">Upload your organization logo</p>
        <div className="flex justify-center mt-4">
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
      </div>
    </div>
  );
}

export default AddProker;
