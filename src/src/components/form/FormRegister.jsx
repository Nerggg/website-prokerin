import React from "react";
import { useForm } from "react-hook-form";

const FormRegister = ({ children, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="pl-[12%] mt-[30px] text-gray-400">Nickname</div>
      <div className="mt-[5px] ml-[10%] w-[50%] h-[50px] rounded-full border-gray-400 border flex items-center">
        <input
          {...register("nick_name")}
          type="text"
          className="ml-[6%] w-[87%] h-[45px] outline-none"
          required={true}
        />
      </div>
      <div className="pl-[12%] mt-[30px] text-gray-400">Instansi</div>
      <div className="mt-[5px] ml-[10%] w-[50%] h-[50px] rounded-full border-gray-400 border flex items-center">
        <input
          {...register("instansi")}
          type="text"
          className="ml-[6%] w-[87%] h-[45px] outline-none"
        />
      </div>
      <div className="pl-[12%] mt-[30px] text-gray-400">E-mail</div>
      <div className="mt-[5px] ml-[10%] w-[50%] h-[50px] rounded-full border-gray-400 border flex items-center">
        <input
          {...register("email")}
          type="email"
          className="ml-[6%] w-[87%] h-[45px] outline-none"
          required={true}
          placeholder="example@mail.com"
        />
      </div>
      <div className="pl-[12%] mt-[20px] text-gray-400">Password</div>
      <div className="mt-[5px] ml-[10%] w-[50%] h-[50px] rounded-full border-gray-400 border flex items-center">
        <input
          {...register("password")}
          type="password"
          className="ml-[6%] w-[87%] h-[45px] outline-none"
          required={true}
          placeholder="6+ strong characteer"
        />
      </div>
      {children}
    </form>
  );
};

export default FormRegister;
