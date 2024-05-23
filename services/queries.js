import api from "@/configs/api";

export const fetchTask = ({ queryKey }) => {
  return api.get(`/api/tasks/${queryKey[1]}`).then((res) => res.data);
};

export const fetchSession = () => {
  return api.get(`/api/session`).then((res) => res.data);
};
