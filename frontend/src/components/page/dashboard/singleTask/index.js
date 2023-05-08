import React, { useState } from "react";

//cookies
import { useCookies } from "react-cookie";

//react router dom
import { useNavigate } from "react-router-dom";

//component
import RemoveTaskModal from "../removeTaskModal";
import EditTaskModal from "../editTaskModal";

//service
import { EditTask } from "../../../../service/task";

//svg
import { ReactComponent as XIcon } from "./../../../../assets/svg/Xmark.svg";
import { ReactComponent as MoreIcon } from "./../../../../assets/svg/more.svg";
import { toast } from "react-toastify";

const SingleTask = ({ singleTask }) => {
  //cookies
  const [cookies] = useCookies(["token"]);

  //navigate
  const navigate = useNavigate();

  //data states
  const [isShowRemoveModal, setIsShowRemoveModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const httpChangeStatusOfTask = async () => {
    try {
      //change value of single task is complete to oppisite
      let singleTaskCompleteValue = singleTask.is_complete === 1 ? 0 : 1;

      const response = await EditTask({
        token: cookies.token,
        description: null,
        title: null,
        taskId: singleTask.id,
        isComplete: singleTaskCompleteValue,
      });

      if (response.status === 200) {
        toast.success("task status changed successfully");
        navigate(0);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error in change status of task : ", error);
    }
  };

  return (
    <>
      <div className="group w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        <button onClick={httpChangeStatusOfTask}>
          {singleTask.is_complete === 1 ? (
            <span className="flex items-center justify-center bg-[#767992] w-6 h-6 rounded-full border border-[#767992]">
              <span className="text-white">&#10003;</span>
            </span>
          ) : (
            <>
              <i className="w-6 h-6 block rounded-full border border-[#767992]" />
            </>
          )}
        </button>
        <span
          className={`text-xl truncate ${
            singleTask.is_complete === 1
              ? "line-through text-[#4D5067]"
              : "text-[#C8CBE7]"
          }`}
        >
          {singleTask.title}
        </span>
        <div className="flex items-center gap-1 text-transparent group-hover:text-[#F0F0F0]/40 duration-200 ml-auto">
          <button
            onClick={() => setIsShowEditModal(true)}
            className="hover:text-[#F0F0F0] duration-200"
          >
            <MoreIcon />
          </button>
          <button
            onClick={() => setIsShowRemoveModal(true)}
            className="hover:text-[#F0F0F0] duration-200"
          >
            <XIcon />
          </button>
        </div>
      </div>

      {isShowRemoveModal && (
        <RemoveTaskModal
          data={singleTask}
          closeModalHandler={() => setIsShowRemoveModal(false)}
        />
      )}

      {isShowEditModal && (
        <EditTaskModal
          data={singleTask}
          closeModalHandler={() => setIsShowEditModal(false)}
        />
      )}
    </>
  );
};

export default SingleTask;
