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
  const apiCall = await useFetch().put(
    `${endPoint}/${taskId}`,
    {
      title,
      description,
      isComplete,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return apiCall;
}
