import React, { useEffect, useState } from "react";

//react router dom
import { useSearchParams } from "react-router-dom";

//PIC
import AuthBanner from "./../../assets/image/authBanner.png";

//compnent
import Login from "../../components/page/auth/login";
import Signup from "../../components/page/auth/signup";

export default function Auth() {
  const [searchParams] = useSearchParams();

  return (
    <div className="md:grid grid-cols-2 flex items-center justify-center min-h-screen">
      <img
        className="h-screen md:relative absolute w-full -z-10 object-fill"
        src={AuthBanner}
        alt="banner"
      />
      <div className="mx-5 sm:mx-auto flex flex-col items-start justify-center gap-y-1 w-full sm:w-3/4 md:w-[365px] bg-white p-3 rounded-xl shadow-md md:shadow-none">
        {searchParams.get("status") === "signup" ? <Signup /> : <Login />}
      </div>
    </div>
  );
}
