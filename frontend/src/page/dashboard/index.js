import React from "react";

//redux
import { useSelector } from "react-redux";

//svg
import { ReactComponent as SunSvg } from "./../../assets/svg/sun.svg";

//pic
import DashboardImage from "./../../assets/image/dahsboardBanner.jpg";

export default function Dashboard() {
  //get user form redux
  const user = useSelector((state) => state.user);

  return (
    <div className="">
      <div className="absolute h-[350px] w-full">
        <img className="w-full h-full" src={DashboardImage} alt="banner" />
      </div>
      <div className="relative flex items-center justify-center w-full z-10">
        <div className="w-full max-w-2xl mt-12 mb-10 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between text-white mb-10">
            <div className="flex items-center justify-start gap-1">
              <span>{user.data.firstName}</span>
              <span>{user.data.lastName}</span>
            </div>
            <span>{user.data.email}</span>
          </div>
          <div className="w-full flex items-center justify-between text-white mb-12">
            <span className="text-5xl font-semibold">TO DO</span>
            <SunSvg />
          </div>
          <div className="w-full shadow-xl bg-[#25273D] py-6 px-7 rounded-xl mb-8 flex items-center justify-start gap-2">
            <i className="w-6 h-6 block rounded-full border border-[#767992]" />
            <input
              className="w-full text-xl bg-transparent outline-none placeholder:text-[#767992] text-white"
              placeholder="Create a new todo ..."
            />
          </div>
          <div className="w-full shadow-xl bg-[#25273D] rounded-xl mb-8 ">
            <div className="flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
              <span className="flex items-center justify-center bg-[#767992] w-6 h-6 rounded-full border border-[#767992]">
                <span className="text-white">&#10003;</span>
              </span>
              <span className="text-[#4D5067] text-xl line-through">
                Complete online JavaScript course
              </span>
            </div>
            <div className="flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
              <i className="w-6 h-6 block rounded-full border border-[#767992]" />
              <span className="text-[#C8CBE7] text-xl">
                Jog around the park 3x
              </span>
            </div>
            <div className="flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
              <i className="w-6 h-6 block rounded-full border border-[#767992]" />
              <span className="text-[#C8CBE7] text-xl">
                10 minutes meditation
              </span>
            </div>
            <div className="flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
              <i className="w-6 h-6 block rounded-full border border-[#767992]" />
              <span className="text-[#C8CBE7] text-xl">Read for 1 hour</span>
            </div>
            <div className="flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
              <i className="w-6 h-6 block rounded-full border border-[#767992]" />
              <span className="text-[#C8CBE7] text-xl">Pick up groceries</span>
            </div>
            <div className="flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
              <i className="w-6 h-6 block rounded-full border border-[#767992]" />
              <span className="text-[#C8CBE7] text-xl">
                Complete Todo App on Frontend Mentor
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 text-[#5B5E7E] py-6 px-7">
              <button>5 items left</button>
              <div className="flex items-center justify-center gap-4">
                <span className="text-[#3A7CFD]">All</span>
                <span>Active</span>
                <span>Completed</span>
              </div>
              <button>Clear Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
