import Elon from "../../assets/card/masElon.jpg";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiCommentPlusOutline,
  mdiHeart,
  mdiHeartOutline,
} from "@mdi/js";
import { useEffect, useState } from "react";

function Comment({ data, user }) {
  const [liked, setLiked] = useState(false);
  const [numLike, setNumLike] = useState(data?.like);

  useEffect(() => {
    if (data?.id == "0891d017-1152-4287-a61c-d3a000efe42f") {
      setLiked(true);
    }
  }, []);

  const onPresLove = () => {
    if (!liked) {
      setNumLike(numLike + 1);
    } else {
      setNumLike(numLike > 0 ? numLike - 1 : 0);
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
          <div className="px-[10px] pb-1 text-[14px] font-bold">Anonym</div>
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
