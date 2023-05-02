import React, { useState, useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//service
import { GetSingleUserTasks } from "../../../../service/task";
import { toast } from "react-toastify";

//component
import SingleTask from "../singleTask";

const TaskList = () => {
  const [cookies] = useCookies(["token"]);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    httpGetAllTaskOfUser();
  }, []);

  const httpGetAllTaskOfUser = async () => {
    try {
      const response = await GetSingleUserTasks({
        token: cookies.token,
      });

      //check response status
      if (response.status === 200) {
        //get data successfully => add data to use state
        setTasks([...response.data.data]);
      } else {
        //error in fetch data => show to user
        toast.error("can't fetch data successfully");
      }
    } catch (error) {
      console.log("error in get all task of user : ", error);
    }
  };

  return (
    <div className="bg-[#25273D] w-full rounded-t-md">
      {tasks.map((singleTask, index) => (
        <SingleTask singleTask={singleTask} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
