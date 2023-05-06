import useFetch from "./../hooks/useFetch";

//url endpoint
const endPoint = "task";

export async function PostNewTask({ token, title, description }) {
  const apiCall = await useFetch().post(
    `${endPoint}`,
    {
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return apiCall;
}

export async function GetSingleUserTasks({ token }) {
  const apiCall = await useFetch().get(`${endPoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return apiCall;
}

export async function RemoveSingleUserTask({ token, id }) {
  const apiCall = await useFetch().delete(`${endPoint}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return apiCall;
}

export async function EditTask({
  token,
  taskId,
  title,
  description,
  isComplete,
}) {
  //handle isCompelte input values
  let isCompelte_Result = false;

  //check if value of isComplete be 1
  if (isComplete === 1) {
    //value of isComplete is 1 => change value of isComplete_result to true
    isCompelte_Result = true;
  }

  const apiCall = await useFetch().put(
    `${endPoint}/${taskId}`,
    {
      title,
      description,
      isComplete: isCompelte_Result,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return apiCall;
}
