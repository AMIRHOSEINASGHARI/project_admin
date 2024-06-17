// next
import NextImage from "next/image";
// axios
import axios from "axios";
// cmp
import BannerChart from "./BannerChart";
import { Image } from "@nextui-org/image";
import { TrendDown, TrendUp } from "@/components/icons/Icons";

const getCoins = async () => {
  const URL = process.env.NEXT_PUBLIC_COIN_API_URL;
  const KEY = process.env.NEXT_PUBLIC_COIN_API_KEY;

  const data = await axios.get(
    `${URL}/coins/markets?vs_currency=usd&x_cg_demo_api_key=${KEY}`
  );

  return data?.data.splice(0, 4);
};

const BannerCoins = async () => {
  try {
    const data = await getCoins();

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-16">
        {data?.map((coin) => {
          const {
            id,
            symbol,
            image,
            current_price,
            price_change_percentage_24h: change,
          } = coin;

          return (
            <div
              key={id}
              className="rounded-xl cardShadow3 flex flex-col gap-3"
            >
              <div className="p-5">
                <p>
                  ${current_price.toLocaleString()}{" "}
                  <span className="uppercase">{symbol}</span>
                </p>
              </div>
              <BannerChart coinId={JSON.parse(JSON.stringify(id))} />
              <div className="flex items-center gap-3 p-5">
                <Image
                  as={NextImage}
                  src={image}
                  width={100}
                  height={100}
                  alt="coin"
                  className="w-[40px] h-[40px]"
                />
                <div>
                  <p className="uppercase">{symbol}/USD</p>
                  {change < 0 && (
                    <div className="text-red-500 flex items-center gap-2">
                      <TrendDown />
                      <span>{change.toFixed(2)}%</span>
                    </div>
                  )}
                  {change >= 0 && (
                    <div className="text-green-500 flex items-center gap-2">
                      <TrendUp />
                      <span>{change.toFixed(2)}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    return <p className="text-white">Error!</p>;
  }
};

export default BannerCoins;
