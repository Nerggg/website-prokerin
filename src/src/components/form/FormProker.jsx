import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Listbox } from "@headlessui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FormProker = ({ children, onSubmit, imageHanddler }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [value, setValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    imageHanddler(event.target.files[0]);
    setSelectedFile(file);
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-9">
      <div className="ml-[3%] font-bold text-5xl mt-6">Proker Form</div>
      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
      <p className="ml-[3%] font-bold mb-2 mt-4">Upload your image's proker </p>
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
      <div className="ml-[3%] font-bold mb-2">
        Enter the Proker's short description
      </div>
      <div className="ml-[3%] h-[35px] rounded-lg bg-white border border-black">
        <input
          required={true}
          {...register("short_description")}
          className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none"
          placeholder="Proker's short description"
        />
      </div>

      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
      <div className="ml-[3%] font-bold mb-2">Enter the Proker's name</div>
      <div className="ml-[3%] h-[35px] rounded-lg bg-white border border-black">
        <input
          required={true}
          {...register("name")}
          className="ml-[1%] pt-[5px] pl-[5px] w-[95%] outline-none"
          placeholder="Proker's title"
        />
      </div>

      <div className="my-[30px] w-full h-[3px] bg-gray-200 rounded-full" />
      <div className="ml-[3%] font-bold mb-2">Enter the Proker's content</div>
      <div className="ml-[3%] quill-container max-h-[400px] overflow-y-auto">
        {/* <textarea
          required={true}
          {...register("description")}
          className="ml-[1%] pt-[5px] pl-[5px] w-[98%] h-[180px] outline-none"
          placeholder="Proker's content"
        ></textarea> */}
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactQuill
              className="overflow-auto"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </div>
      {children}
    </form>
  );
};

export default FormProker;
