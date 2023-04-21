import React, { useState } from "react";

//cookies
import { useCookies } from "react-cookie";

//react router dom
import { Link, useNavigate } from "react-router-dom";

//react toastify
import { toast } from "react-toastify";

//service
import { LoginUser } from "../../../../service/auth";

//component
import TodoInput from "./../../../../components/common/input";

//SVG
import { ReactComponent as Google } from "./../../../../assets/svg/google.svg";

export default function Login() {
  //cookies
  const [cookies, setCookies] = useCookies();

  //navigate
  const navigate = useNavigate();

  //data
  const [dataSchema, setDataSchema] = useState({
    password: "",
    email: "",
  });
  const [error, setError] = useState({});

  const httpLoginUser = async () => {
    try {
      const response = await LoginUser({
        email: dataSchema.email,
        password: dataSchema.password,
      });
      //check response status
      if (response.status === 201) {
        //user login successfully
        toast.success("با موفقیت وارد شدید");
        //add token to cookies
        setCookies("token", response.data.token);

        //navigate to dashboard
        navigate("/dashboard");
      } else {
        //warn that we have error
        toast.error("ورود ناموفق بود");

        //add error to input elements
        setError({
          ...response.data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSetDataSchemaHandler = (target, value) => {
    setDataSchema((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  return (
    <>
      <span className="text-2xl">welcome back</span>
      <span className="text-3xl font-semibold mb-3">Login to your account</span>
      <TodoInput
        target={"email"}
        value={dataSchema.email}
        onDataHandler={onSetDataSchemaHandler}
        error={error.email}
        title="email"
        placeholder="ex:example@gmail.com"
      />
      <TodoInput
        target={"password"}
        value={dataSchema.password}
        onDataHandler={onSetDataSchemaHandler}
        error={error.password}
        title="password"
        placeholder="enter your password here"
      />
      <div className="flex items-center justify-between w-full mb-3">
        <label className="flex items-center justify-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>
        <button>forget password</button>
      </div>
      <button
        onClick={httpLoginUser}
        className="w-full bg-[#04C35C] text-white hover:text-[#04C35C] hover:bg-white border-2 border-[#04C35C] duration-200 rounded-md text-lg py-3"
      >
        Login Now
      </button>

      <button className="flex items-center justify-center gap-2 w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-white border-2 border-gray-800 duration-200 rounded-md text-lg py-3">
        <Google className="w-10" />
        or sign-in with google
      </button>
      <div className="text-sm">
        Dont have an account{" "}
        <Link to={"/?status=signup"} className="text-blue-700">
          Join free today
        </Link>
      </div>
    </>
  );
}
