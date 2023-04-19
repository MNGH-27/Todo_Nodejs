import React, { useState } from "react";

//react router dom
import { Link } from "react-router-dom";

//service
import { CreateNewuser } from "../../../../service/auth";

//component
import TodoInput from "./../../../../components/common/input";

//SVG
import { ReactComponent as Google } from "./../../../../assets/svg/google.svg";

export default function Signup() {
  const [dataSchema, setDataSchema] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const createNewUserHttp = async () => {
    try {
      const response = await CreateNewuser({ ...dataSchema });

      console.log("response : ", response);
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
        target="firstName"
        onDataHandler={onSetDataSchemaHandler}
        title="first name"
        placeholder="ex:mohsen"
      />
      <TodoInput
        value={dataSchema.lastName}
        target="lastName"
        onDataHandler={onSetDataSchemaHandler}
        title="last name"
        placeholder="ex:noury"
      />
      <TodoInput
        value={dataSchema.email}
        target="email"
        onDataHandler={onSetDataSchemaHandler}
        title="email"
        placeholder="ex:example@gmail.com"
      />
      <TodoInput
        value={dataSchema.password}
        target="password"
        onDataHandler={onSetDataSchemaHandler}
        title="password"
        placeholder="enter your password here"
      />

      <button
        onClick={createNewUserHttp}
        className="mt-3 w-full bg-[#04C35C] text-white hover:text-[#04C35C] hover:bg-white border-2 border-[#04C35C] duration-200 rounded-md text-md py-2"
      >
        signup Now
      </button>
      <button className="mb-3 flex items-center justify-center gap-2 w-full bg-gray-800 text-white hover:text-gray-800 hover:bg-white border-2 border-gray-800 duration-200 rounded-md text-md py-2">
        <Google className="w-7" />
        or log-in with google
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
