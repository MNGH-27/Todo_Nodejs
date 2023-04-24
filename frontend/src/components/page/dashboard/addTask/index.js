import React, { useState, useRef } from "react";

//component
import AddDescModal from "../addDescModal";

const AddTask = () => {
  const titleContainer = useRef();

  const [isShowDescModal, setIsShowDescModal] = useState(false);
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="group w-full shadow-xl bg-[#25273D] py-6 px-7 rounded-xl mb-8 flex items-center justify-start gap-2">
        <i className="w-6 h-6 block rounded-full border border-[#767992]" />
        <input
          ref={titleContainer}
          className="w-full text-xl bg-transparent outline-none placeholder:text-[#767992] text-white"
          placeholder="Create a new todo ..."
        />
        <div className="w-[50px] text-transparent group-hover:text-white duration-200 flex items-center justify-end gap-x-2 text-xs">
          <button onClick={() => setIsShowDescModal(true)}>+desc</button>
          <button>+task</button>
        </div>
      </div>
      {isShowDescModal && (
        <AddDescModal
          onCloseModal={(desc) => {
            setIsShowDescModal(false);
            setDescription(desc);
          }}
          titleRef={titleContainer}
          decValue={description}
        />
      )}
    </>
  );
};

export default AddTask;
