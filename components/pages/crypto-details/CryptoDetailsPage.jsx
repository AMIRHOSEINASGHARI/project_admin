// next
import { notFound } from "next/navigation";
// cmp
import Crypto from "./ui/Crypto";

const getCoin = async (id) => {
  try {
    const URL = process.env.NEXT_PUBLIC_COIN_API_URL;
    const KEY = process.env.NEXT_PUBLIC_COIN_API_KEY;

    const res = await fetch(
      `${URL}/coins/${id}?sparkline=true&x_cg_demo_api_key=${KEY}`,
      {
        cache: "force-cache",
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const CryptoDetailsPage = async ({ id }) => {
  const data = await getCoin(id);

  if (data.error) {
    notFound();
  }

  return <Crypto data={data} />;
};

export default CryptoDetailsPage;
