import Elon from "../../assets/card/masElon.jpg";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline, mdiCommentPlusOutline } from "@mdi/js";

function Comment(data) {
  return (
    <div className="flex  h-auto bg-white mx-[3%] drop-shadow-md rounded-xl mt-[20px] p-[20px]">
      <div className="flex flex-col">
        <div className="flex">
          <Icon
            path={mdiAccountCircleOutline}
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="px-[10px] text-[14px] font-bold">Anonym</div>
            <div className="px-[10px] pt-[10px] text-[14px]">
              {data.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
