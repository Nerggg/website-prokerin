import React, { useEffect } from "react";
import useStore from "../Store";
import ProkerCard from "../../components/cards/ProkerCard";
import { useNavigate, useParams } from "react-router";
import FormComment from "../../components/form/FormComment";
import { mdiSendVariant } from "@mdi/js";
import Icon from "@mdi/react";
import Comment from "../../components/comments/Comment";
import ProkerCardDetail from "../../components/cards/ProkerCardDetail";

const MainDetail = () => {
  const {
    user,
    proker,
    comments,
    fetchProkerDetail,
    fetchCommentDetail,
    createComment,
  } = useStore();
  let { id } = useParams();
  useEffect(() => {
    fetchProkerDetail(user?.access_token, id);
    fetchCommentDetail(user?.access_token, id);
  }, []);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // console.log("ini:", data);
    createComment(data, user?.access_token, id).then((data) => {
      console.log("pmpp");
      //   fetchCommentDetail(user?.access_token, id);
      window.location.reload();
    });
  };

  if (!proker?.current) {
    return null;
  }
  const data = proker?.current;
  const data_comments = comments?.list;
  return (
    <div className="w-2/5">
      <div className="flex bg-gray-100 min-h-screen">
        <div>
          <ProkerCardDetail data={data}>
            {data_comments?.map((item) => (
              <Comment {...item} />
            ))}
            <FormComment onSubmit={onSubmit}>
              <button type="submit">
                <Icon
                  path={mdiSendVariant}
                  className="mt-[10px] w-auto h-[25px] ml-3"
                  type={"submit"}
                />
              </button>
            </FormComment>
          </ProkerCardDetail>
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
