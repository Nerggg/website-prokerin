import Elon from "../../assets/card/masElon.jpg";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiCommentPlusOutline,
  mdiHeart,
  mdiHeartOutline,
} from "@mdi/js";
import { useEffect, useState } from "react";

function Comment({ data, user, like, unlike }) {
  const [liked, setLiked] = useState(data.liked?.[user?.user?.id] ?? false);
  const [numLike, setNumLike] = useState(data?.like);
  console.log(user);

  const onPresLove = () => {
    if (!liked) {
      setNumLike(numLike + 1);
      like(data?.id);
    } else {
      setNumLike(numLike > 0 ? numLike - 1 : 0);
      unlike(data?.id);
    }
    setLiked(!liked);
  };

  return (
    <div
      key={data.id}
      className="flex  h-auto bg-white mx-[3%] drop-shadow-md rounded-xl mt-[20px] p-[20px]"
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <Icon
            path={mdiAccountCircleOutline}
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          {/* <div className="flex items-center"> */}
          <div className="px-[10px] pb-1 text-[14px] font-bold">
            {data?.id_creator == user?.user?.id
              ? user?.user?.nick_name
              : "Anonym"}
          </div>
          {/* </div> */}
          <div className="ml-auto flex flex-col items-center">
            <Icon
              path={!liked ? mdiHeartOutline : mdiHeart}
              size={1}
              className={`rounded-full object-cover  ${
                liked ? "text-red-600" : ""
              }`}
              onClick={onPresLove}
            />
            <div className="text-xs">{numLike}</div>
          </div>
        </div>
        <div className="px-[10px] pt-[10px] text-[14px]">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default Comment;
