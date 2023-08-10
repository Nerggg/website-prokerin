import React from "../../assets/card/react.png";
import Comment1 from "../comments/Comment1";
import Comment2 from "../comments/Comment2";
import Icon from "@mdi/react";
import {
  mdiCommentPlusOutline,
  mdiAccountCircleOutline,
  mdiSendVariant,
} from "@mdi/js";
import { useNavigate } from "react-router";
import FormComment from "../form/FormComment";
import { useEffect } from "react";

const ProkerCard = ({ children, data, isDetail = false }) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen ">
      <div className="flex w-[80%] h-auto bg-white ml-[16%] drop-shadow-md rounded-xl mt-[40px] p-[20px]">
        <div className="flex flex-col min-w-full">
          <div
            className="flex cursor-pointer"
            onClick={() => navigate(`./${data.id}`)}
          >
            <Icon path={mdiAccountCircleOutline} className=" w-auto h-[80px]" />
            <div className="flex flex-col">
              <div className="px-[10px] pt-[10px] font-bold">{data?.name}</div>
              <div className="px-[10px]">{data?.short_desctiption}</div>
            </div>
          </div>
          <div>
            <img src={data?.image} className="bg-cover p-5" />
          </div>
          <div className="pt-[10px]">{data?.description}</div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default ProkerCard;
