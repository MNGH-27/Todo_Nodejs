import React, { useState } from "react";

//react router dom
import { useNavigate } from "react-router-dom";

//cookies
import { useCookies } from "react-cookie";

//react toastify
import { toast } from "react-toastify";

const EditTaskModal = ({ data, closeModalHandler }) => {
  const [cookies] = useCookies(["token"]);

  const [dataSchema, setDataSchema] = useState({
    title: data.title && data.title,
    description: data.description && data.description,
    isComplete: data.is_complete && data.is_complete,
  });

  //navigate
  const navigate = useNavigate();

  const onChangeDataSchemaHandler = (target, value) => {
    setDataSchema((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  return (
    <div
      onClick={closeModalHandler}
      className="bg-black bg-opacity-30 fixed top-0 right-0 w-full h-full flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative duration-500 bg-[#25273D] rounded-md p-6 mx-2 w-1/2 max-w-[450px] flex flex-col gap-5`}
      >
        <div className="flex flex-col items-start w-full text-white gap-2">
          <span className="">title</span>
          <input
            className="outline-none w-full bg-transparent border rounded-md px-2 py-1 text-lg"
            value={dataSchema.title}
            onChange={(e) => onChangeDataSchemaHandler("title", e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start w-full text-white gap-2">
          <span>description</span>
          <textarea
            value={dataSchema.description}
            onChange={(e) =>
              onChangeDataSchemaHandler("description", e.target.value)
            }
            className="outline-none w-full bg-transparent border rounded-md px-2 py-1 text-lg min-h-[100px] max-h-[200px]"
          />
        </div>
        <div className="w-full flex justify-between items-center text-white gap-2">
          <span>is complete</span>
          <button
            onClick={() =>
              onChangeDataSchemaHandler("isComplete", !dataSchema.isComplete)
            }
            className={`w-4 h-4 rounded-full border duration-200 ${
              dataSchema.isComplete ? "bg-orange-500" : ""
            }`}
          ></button>
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            // onClick={}
            className="bg-[#F97B22] text-white border-2 border-[#F97B22] hover:text-[#F97B22] hover:bg-transparent duration-200 px-6 py-2 rounded-md font-medium"
          >
            save change
          </button>
          <button
            onClick={closeModalHandler}
            className="border-2 border-[#19A7CE] text-[#19A7CE] px-6 py-2 rounded-md font-medium hover:text-white hover:bg-[#19A7CE] duration-200"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
