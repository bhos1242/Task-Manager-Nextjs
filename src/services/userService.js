import { httpAxios } from "@/helper/httpHelper";

export async function SignUp(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);
  return result;
}
export async function Login(user) {
  const result = await httpAxios
    .get("/api/users", user)
    .then((response) => response.data);
  return result;
}
