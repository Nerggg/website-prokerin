import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormProker = ({ children, onSubmit, imageHanddler }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    imageHanddler(event.target.files[0]);
    setSelectedFile(file);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
      <p className="ml-[3%] font-bold mt-4">Upload your image's proker </p>
      <div className="ml-[3%] flex mt-[5px]">
        <input
          required={true}
          {...register("image")}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      {selectedFile && (
        <div className="flex justify-center mt-4">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded Logo"
            className="max-w-full h-auto"
          />
        </div>
      )}
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
      <div className="ml-[3%] font-bold">
        Enter the Proker's short description
      </div>
      <div className="ml-[3%] w-[60%] h-[35px] rounded-lg bg-white border border-black">
        <input
          required={true}
          {...register("short_descrip[tion")}
          className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none"
          placeholder="Proker's short description"
        />
      </div>
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
      <div className="ml-[3%] font-bold">Enter the Proker's name</div>
      <div className="ml-[3%] w-[60%] h-[35px] rounded-lg bg-white border border-black">
        <input
          required={true}
          {...register("name")}
          className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none"
          placeholder="Proker's title"
        />
      </div>
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
      <div className="ml-[3%] font-bold">Enter the Proker's content</div>
      <div className="ml-[3%] w-[60%] h-[185px] rounded-lg bg-white border border-black">
        <textarea
          required={true}
          {...register("description")}
          className="ml-[1%] pt-[5px] pl-[5px] w-[98%] h-[180px] outline-none"
          placeholder="Proker's content"
        ></textarea>
      </div>
      {children}
    </form>
  );
};

export default FormProker;
