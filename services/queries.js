// axios
import axios from "axios";
// configs
import api from "@/configs/api";

const URL = process.env.NEXT_PUBLIC_COIN_API_URL;
const KEY = process.env.NEXT_PUBLIC_COIN_API_KEY;

export const fetchTask = ({ queryKey }) => {
  return api.get(`/api/tasks/${queryKey[1]}`).then((res) => res.data);
};

export const fetchSession = () => {
  return api.get(`/api/session`).then((res) => res.data);
};

export const fetchCoin = ({ queryKey }) => {
  return axios
    .get(
      `${URL}/coins/${queryKey[1]}/market_chart?vs_currency=usd&days=365&x_cg_demo_api_key=${KEY}`
    )
    .then((res) => res.data);
};
