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
      logout: () => {
        set(
          produce((state) => {
            state.user = null;
            state.proker = Default;
            state.isLogin = false;
          })
        );
      },
      login: (data) => {
        // console.log("disni", data);
        fetchData("auth/login", data, "POST").then((data) => {
          console.log("ini", data);
          if (data.success) {
            set(
              produce((state) => {
                state.user = data.data;
                state.isLogin = true;
              })
            );
          }
        });
      },
      register: (data) => {
        // console.log("disni", data);
        fetchData("auth/register", data, "POST").then((data) => {
          console.log("ini", data);
        });
      },
      proker: Default,
      createProker: (data, token) => {
        fetchData("proker", data, "POST", token).then((data) => {
          console.log("ini", data);
        });
      },
      fetchProkerList: (data) => {
        set(
          produce((state) => {
            state.proker.list = data;
          })
        );
      },
      fetchProkerDetail: (data) => {
        set(
          produce((state) => {
            state.proker.current = data;
          })
        );
      },
      comment: [],
      fetchCommentList: (data) => {
        set(
          produce((state) => {
            state.comment = data;
          })
        );
      },
      //   count: 0,
      //   increment: () =>
      //     set(
      //       produce((state) => {
      //         state.count += 1;
      //       })
      //     ),
      //   decrement: () =>
      //     set(
      //       produce((state) => {
      //         state.count -= 1;
      //       })
      //     ),
      //   customFunction: (newValue) =>
      //     set(
      //       produce((state) => {
      //         state.count += newValue;
      //       })
      //     ),
    }),
    {
      name: "zustand-example", // Key to use for localStorage
    }
  )
);

export default useStore;
