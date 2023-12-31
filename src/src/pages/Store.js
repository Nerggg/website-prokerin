// state.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import produce from "immer";
import { fetchData } from "../utilities/Networking";
const Default = { list: [], current: null };
const useStore = create(
  persist(
    (set) => ({
      isLogin: false,
      user: null,
      comments: Default,
      logout: () => {
        set(
          produce((state) => {
            state.user = null;
            state.proker = Default;
            state.isLogin = false;
          })
        );
      },
      login: async (data) => {
        // console.log("disni", data);
        fetchData("auth/login", data, "POST")
          .then((data) => {
            console.log("ini", data);
            if (data.success) {
              set(
                produce((state) => {
                  state.user = data.data;
                  state.isLogin = true;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      register: async (data) => {
        // console.log("disni", data);
        fetchData("auth/register", data, "POST")
          .then((data) => {
            console.log("ini", data);
          })
          .catch((err) => {
            console.log(err);
          });
      },

      proker: Default,

      createProker: (data, token) => {
        fetchData("proker", data, "POST", token)
          .then((data) => {
            console.log("ini", data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      fetchProkerList: (token) => {
        fetchData("proker", null, "GET", token)
          .then((data) => {
            if (data?.success) {
              set(
                produce((state) => {
                  state.proker.list = data.data;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      fetchProkerDetail: (token, id) => {
        fetchData(`proker/${id}`, null, "GET", token)
          .then((data) => {
            if (data?.success) {
              set(
                produce((state) => {
                  state.proker.current = data.data;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },

      resetComments: () => {
        set(
          produce((state) => {
            state.comments.list = null;
          })
        );
      },
      createComment: async (data, token, id) => {
        fetchData(`comment/${id}`, data, "POST", token)
          .then((data) => {
            console.log("ini", data);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      fetchCommentList: (token) => {
        fetchData("comment", null, "GET", token)
          .then((data) => {
            if (data?.success) {
              set(
                produce((state) => {
                  state.comments.list = data.data;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      fetchCommentDetail: (token, id) => {
        fetchData(`comment/${id}`, null, "GET", token)
          .then((data) => {
            console.log("ini", data);
            if (data?.success) {
              set(
                produce((state) => {
                  state.comments.list = data.data;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      commentLike: (token, proker_id, comment_id) => {
        fetchData(
          `comment/${proker_id}/${comment_id}/like`,
          null,
          "GET",
          token
        );
        // .then((data) => {
        //   if (data?.success) {
        //     set(
        //       produce((state) => {
        //         state.comments.list = data.data;
        //       })
        //     );
        //   }
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
      },
      commentUnlike: (token, proker_id, comment_id) => {
        fetchData(
          `comment/${proker_id}/${comment_id}/unlike`,
          null,
          "GET",
          token
        );
        // .then((data) => {
        //   if (data?.success) {
        //     set(
        //       produce((state) => {
        //         state.comments.list = data.data;
        //       })
        //     );
        //   }
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
      },
    }),
    {
      name: "zustand-example", // Key to use for localStorage
    }
  )
);

export default useStore;
