import React, { useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//react router dom
import { Outlet } from "react-router-dom";

//react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//serice
import { GetUserData } from "../../../service/user";

//redux
import { useSelector, useDispatch } from "react-redux";
import { addData, startLoading, stopLoading } from "../../../slice/userSlice";

export default function Layout() {
  //initial redux objects => dispatch , selector
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //cookies
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    httpGetUserData();
  }, []);

  const httpGetUserData = async () => {
    dispatch(startLoading());
    try {
      const response = await GetUserData({
        token: cookies.token,
      });

      //check response status
      if (response.status === 200) {
        dispatch(
          addData({
            ...response.data,
          })
        );
      } else {
        toast.error("can't get user data");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(stopLoading());
  };

  return (
    <div className="min-h-screen bg-[#171823]">
      <Outlet />
      <ToastContainer />
    </div>
  );
}
