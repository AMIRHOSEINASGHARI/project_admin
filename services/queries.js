import api from "@/configs/api";

export const fetchTask = ({ queryKey }) => {
  return api.get(`/api/tasks/${queryKey[1]}`).then((res) => res.data);
};
