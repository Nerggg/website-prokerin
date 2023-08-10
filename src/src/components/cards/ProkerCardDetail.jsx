import React from "../../assets/card/react.png";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline } from "@mdi/js";
import { useNavigate } from "react-router";

const ProkerCardDetail = ({ children, data, isDetail = false }) => {
  // const navigate = useNavigate();
  return (
    <div className="min-h-[720px]">
      <div className="flex  h-full bg-white drop-shadow-md rounded-xl p-[20px]">
        <div className="flex flex-col space-y-5 min-w-full">
          <div
            className="flex cursor-pointer space-x-3"
            // onClick={() => navigate(`./${data.id}`)}
          >
            <Icon path={mdiAccountCircleOutline} className=" w-auto h-[80px]" />
            <div className="flex flex-col ">
              <div className="text-2xl pt-[10px] font-bold">{data?.name}</div>
              <div className="line-clamp-1">
                {data?.short_description}asdasdasdasdasdasdasdasdasdasd
              </div>
            </div>
          </div>
          <div className="  flex justify-center">
            <img src={data?.image} alt="foto" className="object-cover " />
          </div>
          <div className="px-3 text-justify">{data?.description}</div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default ProkerCardDetail;
