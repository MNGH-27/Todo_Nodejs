import React, { useState, useRef } from "react";

//react router dom
import { useNavigate } from "react-router-dom";

//react toast
import { toast } from "react-toastify";

//cookies
import { useCookies } from "react-cookie";

//service
import { PostNewTask } from "../../../../service/task";

//component
import AddDescModal from "../addDescModal";

const AddTask = () => {
  //cookeis
  const [cookies] = useCookies(["token"]);

  //ref
  const titleContainer = useRef();

  //navigate
  const navigate = useNavigate();

  const [isShowDescModal, setIsShowDescModal] = useState(false);
  const [description, setDescription] = useState("");

  const httpAddNewTask = async () => {
    try {
      const response = await PostNewTask({
        token: cookies.token,
        title: titleContainer.current.value,
        description: description,
      });

      //check response status
      if (response.status === 201) {
        //data add successfully , reload to show result of changes
        navigate(0);
        // toast.success("task added successfully");
      } else {
        toast.error("adding task fails");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="group w-full shadow-xl bg-[#25273D] py-6 px-7 rounded-xl mb-8 flex items-center justify-start gap-2">
        <input
          ref={titleContainer}
          className="w-full text-xl bg-transparent outline-none placeholder:text-[#767992] text-white"
          placeholder="Create a new todo ..."
        />
        <div className="w-[50px] text-transparent group-hover:text-white duration-200 flex items-center justify-end gap-x-2 text-xs">
          <button onClick={() => setIsShowDescModal(true)}>+desc</button>
          <button onClick={httpAddNewTask}>+task</button>
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
