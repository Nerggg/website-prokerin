import React, { Fragment, useEffect, useState } from "react";
import useStore from "../Store";
import ProkerCard from "../../components/cards/ProkerCard";
import { useNavigate, useParams } from "react-router";
import FormComment from "../../components/form/FormComment";
import { mdiSendVariant } from "@mdi/js";
import Icon from "@mdi/react";
import Comment from "../../components/comments/Comment";
import ProkerCardDetail from "../../components/cards/ProkerCardDetail";
import { Dialog, Transition } from "@headlessui/react";
const MainDetail = ({ id }) => {
  const {
    user,
    proker,
    comments,
    fetchProkerDetail,
    fetchCommentDetail,
    commentLike,
    commentUnlike,
    createComment,
    resetComments,
  } = useStore();
  //   let { id } = useParams();
  useEffect(() => {
    fetchProkerDetail(user?.access_token, id);
    fetchCommentDetail(user?.access_token, id);
    return () => {
      resetComments();
    };
  }, []);

  const data = proker?.current;
  const data_comments = comments?.list;

  const onSubmit = (data) => {
    createComment(data, user?.access_token, id).then((data) => {
      console.log("pmpp");
      fetchCommentDetail(user?.access_token, id);
    });
  };

  const onLike = (id) => {
    console.log(id);
    commentLike(user?.access_token, data?.id, id);
  };
  const onUnlike = (id) => {
    console.log(id);
    commentUnlike(user?.access_token, data?.id, id);
  };

  if (!proker?.current) {
    return null;
  }

  return (
    <div className="">
      <div className="flex bg-gray-100 min-h-screen">
        <div>
          <ProkerCardDetail key={data?.id} data={data}>
            {data_comments?.map((item) => (
              <Comment
                key={item?.id}
                data={item}
                user={user}
                like={onLike}
                unlike={onUnlike}
              />
            ))}
            <FormComment onSubmit={onSubmit}>
              <button type="submit">
                <Icon
                  path={mdiSendVariant}
                  className=" w-auto h-[25px] ml-3"
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
