import React from "react";

//react router dom
import { useNavigate } from "react-router-dom";

//cookies
import { useCookies } from "react-cookie";

//service
import { RemoveSingleUserTask } from "../../../../service/task";
import { toast } from "react-toastify";

const RemoveTaskModal = ({ data, closeModalHandler }) => {
  const [cookies] = useCookies(["token"]);

  //navigate
  const navigate = useNavigate();

  const httpRemoveSingleTask = async () => {
    try {
      const response = await RemoveSingleUserTask({
        token: cookies.token,
        id: data.id,
      });

      //get message of status
      const { message } = response.data;

      //check response status
      if (response.status === 202) {
        //reload page to show changed status
        navigate(0);
        //data saved successfully
        // toast.success(message);
      } else {
        //remove task failed show why ?!!
        toast.error(message);
      }
    } catch (error) {
      console.log("there was error in remove task : ", error);
    }
  };

  return (
    <div
      onClick={closeModalHandler}
      className="bg-black bg-opacity-30 fixed top-0 right-0 w-full h-full flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative duration-500 bg-[#25273D] rounded-md p-6 mx-2 min-w-[450px]`}
      >
        <span className="text-[#F9F9F9] text-xl">
          Do you want to remove this task
        </span>
        <div className="flex flex-col items-start gap-3 my-5">
          <div className="flex flex-col items-start">
            <span className="text-white/50">title</span>
            <span className="text-white font-medium text-lg">{data.title}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-white/50">description</span>
            <span className="text-white font-medium text-lg">
              {data.description}
            </span>
          </div>
          <div className="w-full grid grid-cols-2 text-white">
            <div className="flex flex-col items-center justify-center gap-1">
              is done
              <span
                className={`w-4 h-4 border-2 ${
                  data.is_complete ? "bg-white/50" : ""
                }`}
              ></span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              is priority
              <span
                className={`w-4 h-4 border-2 ${
                  data.is_priority ? "bg-white/50" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 mt-10">
          <button
            onClick={httpRemoveSingleTask}
            className="bg-[#D21312] text-white border-2 border-[#D21312] hover:text-[#D21312] hover:bg-transparent duration-200 px-6 py-2 rounded-md font-medium"
          >
            remove
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

export default RemoveTaskModal;
