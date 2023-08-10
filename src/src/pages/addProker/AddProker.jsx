import React, { useState } from "react";
import FormProker from "../../components/form/FormProker";
import useStore from "../Store";
import { useNavigate } from "react-router-dom";

function AddProker() {
  const navigate = useNavigate();
  const { user, createProker } = useStore();
  const [base64Image, setBase64Image] = useState("");
  const handlerImage = (data) => {
    const file = data;
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
  };
  const onSUmbit = (data) => {
    var datares = data;
    datares = { ...data, image: base64Image };
    console.log(datares);
    // createProker(datares, user?.access_token);
    // navigate("/main");
  };
  return (
    <div className=" w-2/3  ">
      <FormProker onSubmit={onSUmbit} imageHanddler={handlerImage}>
        <button
          type="submit"
          className="ml-auto w-40 h-[45px] bg-red-500 text-white rounded-full flex justify-center items-center mt-[40px] "
        >
          Add proker
        </button>
      </FormProker>
    </div>
  );
}

export default AddProker;
