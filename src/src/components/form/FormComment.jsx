import { mdiCommentPlusOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormComment = ({ children, onSubmit, imageHanddler }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <Icon
          path={mdiCommentPlusOutline}
          className="mt-[10px] w-auto h-[25px]"
        />
        <div className="mt-[6px] ml-[2%] h-[35px] w-1/3 bg-white rounded-lg border-black border">
          <input
            className="mx-[4px] mt-[4px] w-[95%] outline-none"
            placeholder="Add comment"
            {...register("description")}
          />
        </div>
        {children}
      </div>
    </form>
  );
};

export default FormComment;
