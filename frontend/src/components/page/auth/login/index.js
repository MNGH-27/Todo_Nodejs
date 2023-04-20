//component
import TodoInput from "./../../../../components/common/input";

//SVG
import { ReactComponent as Google } from "./../../../../assets/svg/google.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <span className="text-2xl">welcome back</span>
      <span className="text-3xl font-semibold mb-3">Login to your account</span>
      <TodoInput title="email" placeholder="ex:example@gmail.com" />
      <TodoInput title="password" placeholder="enter your password here" />
      <div className="flex items-center justify-between w-full mb-3">
        <label className="flex items-center justify-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>
        <button>forget password</button>
      </div>
      <button className="w-full bg-[#04C35C] text-white hover:text-[#04C35C] hover:bg-white border-2 border-[#04C35C] duration-200 rounded-md text-lg py-3">
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