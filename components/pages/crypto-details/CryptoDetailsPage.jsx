import Crypto from "./ui/Crypto";

const getCoin = async (id) => {
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
};

const CryptoDetailsPage = async ({ id }) => {
  try {
    const data = await getCoin(id);

    return <Crypto data={data} />;
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default CryptoDetailsPage;
