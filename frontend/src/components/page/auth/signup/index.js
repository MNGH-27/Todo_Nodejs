import React, { useState } from "react";

//cookies
import { useCookies } from "react-cookie";

//react router dom
import { Link, useNavigate } from "react-router-dom";

//service
import { CreateNewuser } from "../../../../service/auth";

//component
import TodoInput from "./../../../../components/common/input";

//SVG
import { ReactComponent as Google } from "./../../../../assets/svg/google.svg";
import { toast } from "react-toastify";

export default function Signup() {
  //navigator
  const navigate = useNavigate();

  //cookies
  const [cookies, setCookies] = useCookies();

  //datas
  const [dataSchema, setDataSchema] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState({});

  const createNewUserHttp = async () => {
    try {
      const response = await CreateNewuser({ ...dataSchema });

      //check response status
      if (response.status === 201) {
        //user login successfully
        toast.success("SignUp Successfully");
        //add token to cookies
        setCookies("token", response.data.token);

        //navigate to dashboard
        navigate("/dashboard");
      } else {
        //warn that we have error
        toast.error("login failed");

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
      <span className="text-2xl">Welcome</span>
      <span className="text-3xl font-semibold mb-3">create new account</span>

      <TodoInput
        value={dataSchema.firstName}
        error={error.firstName}
        target="firstName"
        onDataHandler={onSetDataSchemaHandler}
        title="first name"
        placeholder="ex:mohsen"
      />
      <TodoInput
        value={dataSchema.lastName}
        error={error.lastName}
        target="lastName"
        onDataHandler={onSetDataSchemaHandler}
        title="last name"
        placeholder="ex:noury"
      />
      <TodoInput
        value={dataSchema.email}
        error={error.email}
        target="email"
        onDataHandler={onSetDataSchemaHandler}
        title="email"
        placeholder="ex:example@gmail.com"
      />
      <TodoInput
        value={dataSchema.password}
        error={error.password}
        target="password"
        onDataHandler={onSetDataSchemaHandler}
        title="password"
        placeholder="enter your password here"
      />

      <button
        onClick={createNewUserHttp}
        className="my-3 w-full bg-[#04C35C] text-white hover:text-[#04C35C] hover:bg-white border-2 border-[#04C35C] duration-200 rounded-md text-md py-2"
      >
        signup Now
      </button>

      <div className="text-sm">
        Do you have account ?{" "}
        <Link to={"/"} className="text-blue-700">
          join your account
        </Link>
      </div>
    </>
  );
}
