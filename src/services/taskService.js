import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const result = httpAxios
    .post("api/tasks", task)
    .then((response) => response.data);
  return result;
}
