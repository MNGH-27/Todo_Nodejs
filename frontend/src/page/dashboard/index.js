import React, { useState } from "react";

//hooks
import { useCustomSearchParams } from "../../hooks/useCustomSearchParams";

//redux
import { useSelector } from "react-redux";

//component
import AddTask from "../../components/page/dashboard/addTask";
import TaskList from "../../components/page/dashboard/taskList";
import RemoveAllCompleteTaskModal from "../../components/page/dashboard/removeAllCompleteTaskModal";
//svg
import { ReactComponent as SunSvg } from "./../../assets/svg/sun.svg";

//pic
import DashboardImage from "./../../assets/image/dahsboardBanner.jpg";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useCustomSearchParams();

  //get user form redux
  const user = useSelector((state) => state.user);

  //data
  const [meta, setMeta] = useState({});
  const [isShowRemoveAllCompleteTask, setIsShowRemoveAllCompleteTask] =
    useState(false);

  const onSetSearchParamsHandler = (stage = undefined) => {
    if (stage !== undefined) {
      setSearchParams({
        isComplete: stage,
      });
    } else {
      setSearchParams({});
    }
  };

  const onSetMetaHandler = (metaData) => {
    setMeta({
      ...metaData,
    });
  };

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
          <TaskList setMeta={onSetMetaHandler} />

          <div className="w-full shadow-xl bg-[#25273D] rounded-b-xl mb-8 ">
            <div className="flex items-center justify-between gap-3 text-[#5B5E7E] py-6 px-7">
              <span>{meta.dataCount} items left</span>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => onSetSearchParamsHandler()}
                  className={`${
                    !searchParams.isComplete
                      ? "text-[#3A7CFD]"
                      : "hover:text-[#254ea0]"
                  } duration-200`}
                >
                  All
                </button>
                <button
                  onClick={() => onSetSearchParamsHandler(false)}
                  className={`${
                    searchParams.isComplete === "false"
                      ? "text-[#3A7CFD]"
                      : "hover:text-[#254ea0]"
                  } duration-200`}
                >
                  UnCompleted
                </button>
                <button
                  onClick={() => onSetSearchParamsHandler(true)}
                  className={`${
                    searchParams.isComplete === "true"
                      ? "text-[#3A7CFD]"
                      : "hover:text-[#254ea0]"
                  } duration-200`}
                >
                  Completed
                </button>
              </div>
              <button onClick={() => setIsShowRemoveAllCompleteTask(true)}>
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
      {isShowRemoveAllCompleteTask && (
        <RemoveAllCompleteTaskModal
          closeModalHandler={() => setIsShowRemoveAllCompleteTask(false)}
        />
      )}
    </div>
  );
}
