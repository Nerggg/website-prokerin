import React, { useState } from "react";
import SideBar from "../../components/sidebar/SidebarAddProker";
import FormProker from "../../components/form/FormProker";
import useStore from "../Store";
import { useNavigate } from "react-router-dom";

function AddProker() {
  const navigate = useNavigate();
  const { user, createProker } = useStore();
  const [base64Image, setBase64Image] = useState("");
  const onSUmbit = (data) => {
    var datares = data;
    const file = data.image[0];
    var image = "";

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        image = event.target.result;
        setBase64Image(base64);
      };
      reader.readAsDataURL(file);
    }
    datares = { ...data, image: image };
    console.log(datares);
    createProker(datares, user?.access_token);
    navigate("/main");
  };
  return (
    <div className="flex">
      <SideBar />

      <div className="ml-[13%] w-screen pb-[30px]">
        <FormProker onSubmit={onSUmbit}>
          <button
            type="submit"
            className="ml-[3%] w-[40%] h-[45px] bg-red-500 text-white rounded-full flex justify-center items-center mt-[40px]"
          >
            Add proker
          </button>
        </FormProker>
      </div>
    </div>
  );
}

export default AddProker;
