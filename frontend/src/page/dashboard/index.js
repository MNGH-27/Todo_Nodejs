import React from "react";

//redux
import { useSelector } from "react-redux";

//component
import AddTask from "../../components/page/dashboard/addTask";
import TaskList from "../../components/page/dashboard/taskList";
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
        <div className="font-[Roboto] w-full max-w-2xl mt-12 mb-10 flex flex-col items-center justify-center">
          <div className="font-[Salsa] w-full flex items-center justify-between text-white mb-10">
            <div className="flex items-center justify-start gap-1">
              <span>{user.data.firstName}</span>
              <span>{user.data.lastName}</span>
            </div>
            <span>{user.data.email}</span>
          </div>
          <div className="font-[Salsa] w-full flex items-center justify-between text-white mb-12">
            <span className="text-5xl font-semibold">TO DO</span>
            <SunSvg />
          </div>
          {/* component to add task  */}
          <AddTask />

          {/* component show all task of user */}
          <TaskList />

          <div className="w-full shadow-xl bg-[#25273D] rounded-b-xl mb-8 ">
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
