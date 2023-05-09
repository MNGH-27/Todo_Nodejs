import React, { useState, useEffect } from "react";

//react router dom
import { useLocation } from "react-router-dom";

//cookies
import { useCookies } from "react-cookie";

//service
import { GetSingleUserTasks } from "../../../../service/task";
import { toast } from "react-toastify";

//component
import SingleTask from "../singleTask";

const TaskList = ({ setMeta }) => {
  //location
  const location = useLocation();

  //cookies
  const [cookies] = useCookies(["token"]);

  //data
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    httpGetAllTaskOfUser(location.search);
  }, [location]);

  const httpGetAllTaskOfUser = async (filter = "") => {
    try {
      const response = await GetSingleUserTasks({
        token: cookies.token,
        filter,
      });

      //check response status
      if (response.status === 200) {
        //get data successfully => add data to use state
        setTasks([...response.data.data]);
        //set meta and give it to parent component to show in footer of list
        setMeta({
          ...response.data.meta,
        });
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
      {tasks.length === 0 ? (
        <p className="text-white py-4 text-center text-xl font-medium">
          List is empty ...
        </p>
      ) : (
        tasks.map((singleTask, index) => (
          <SingleTask singleTask={singleTask} key={index} />
        ))
      )}
    </div>
  );
};

export default TaskList;
