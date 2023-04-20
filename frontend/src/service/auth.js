import useFetch from "./../hooks/useFetch";

//url endpoint
const endPoint = "auth";

export async function CreateNewuser({ email, firstName, lastName, password }) {
  const apiCall = await useFetch().post(`${endPoint}/signup`, {
    email,
    firstName,
    lastName,
    password,
  });

  return apiCall;
}

export async function LoginUser({ email, password }) {
  const apiCall = await useFetch().post(`${endPoint}/login`, {
    email,
    password,
  });

  return apiCall;
}
