import { useEffect } from "react";
import { fetchData } from "../utilities/Networking";
import useStore from "./Store";

export const Login = (data = null) => {
  const { login } = useStore();
  login(data);

  //   useEffect(() => {
  //     fetchData("auth/login", data, "POST").then((data) => {
  //       console.log("ini", data);
  //       login(data);
  //     });
  //   }, []);
};
