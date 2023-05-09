import React from "react";

//react router dom
import { useNavigate } from "react-router-dom";

//service
import { RemoveAllCompleteTask } from "../../../../service/task";

//cookies
import { useCookies } from "react-cookie";

//react toastify
import { toast } from "react-toastify";

const RemoveAllCompleteTaskModal = ({ closeModalHandler }) => {
  const [cookies] = useCookies(["token"]);

  //navigate
  const navigate = useNavigate();

  const httpRemoveAllTask = async () => {
    try {
      const response = await RemoveAllCompleteTask({
        token: cookies.token,
      });

      //check resposne status
      if (response.status === 200) {
        //task changed successfully, reload page
        navigate(0);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error in remove all task : ", error);
    }
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
        <p className="text-[#F99B7D] text-lg font-medium">
          Do you want to remove all Completed task ?!
        </p>
        <p className="text-white text-center text-sm">
          with remove all task you can't read them again
        </p>
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={httpRemoveAllTask}
            className="bg-[#B04759] text-white border-2 border-[#B04759] hover:text-[#B04759] hover:bg-transparent duration-200 px-6 py-2 rounded-md font-medium"
          >
            delete
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

export default RemoveAllCompleteTaskModal;
