import React, { useState } from "react";

//svg
import { ReactComponent as XIcon } from "./../../../../assets/svg/Xmark.svg";
import { ReactComponent as MoreIcon } from "./../../../../assets/svg/more.svg";

//component
import RemoveTaskModal from "../removeTaskModal";
import EditTaskModal from "../editTaskModal";

const SingleTask = ({ singleTask }) => {
  const [isShowRemoveModal, setIsShowRemoveModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  return (
    <>
      <div className="group w-full flex items-center justify-start gap-2 px-7 py-6 border-b border-[#979797]/20">
        {singleTask.is_complete === 1 ? (
          <span className="flex items-center justify-center bg-[#767992] w-6 h-6 rounded-full border border-[#767992]">
            <span className="text-white">&#10003;</span>
          </span>
        ) : (
          <>
            <i className="w-6 h-6 block rounded-full border border-[#767992]" />
          </>
        )}
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
