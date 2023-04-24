import useFetch from "./../hooks/useFetch";

//url endpoint
const endPoint = "user";

export async function GetUserData({ token }) {
  const apiCall = await useFetch().get(`${endPoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return apiCall;
}
