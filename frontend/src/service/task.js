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
