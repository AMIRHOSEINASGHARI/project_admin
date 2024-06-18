"use client";

// next
import NextImage from "next/image";
// cmp
import { Image } from "@nextui-org/image";
import { TrendDown, TrendUp } from "@/components/icons/Icons";
import { AreaChart } from "@tremor/react";

const PriceChart = ({
  image,
  name,
  symbol,
  market_cap_rank,
  sparkline,
  current_price,
  price_change_percentage_24h: change,
  price_change_24h,
}) => {
  let chartdata = [];

  for (let d of sparkline.price) {
    chartdata.push({
      "Price 24h": d,
    });
  }

  const dataFormatter = (number) =>
    `$${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <div className="box border">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Image
            as={NextImage}
            src={image?.large || image?.small || image?.thumb}
            width={150}
            height={150}
            alt={name}
          />
          <div className="absolute -bottom-3 flex justify-center w-full z-10">
            <div className="w-fit bg-black rounded-lg py-1 px-3 text-white text-p1">
              # {market_cap_rank}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="h1">{name}</h1>
            <span className="uppercase border py-1 px-2 rounded-lg text-p2">
              {symbol}
            </span>
          </div>
          <h1 className="h1">$ {current_price.toLocaleString()}</h1>
          <div
            className={`flex items-center gap-2 ${
              change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {change >= 0 ? <TrendUp /> : <TrendDown />}
            <p className="font-medium text-p1">{price_change_24h.toFixed(2)}</p>
          </div>
          <div
            className={`flex items-center gap-2 ${
              change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {change >= 0 ? <TrendUp /> : <TrendDown />}
            <p className="font-medium text-p1">{change.toFixed(2)}%</p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      {/* <div className="flex flex-wrap items-center justify-between gap-5 box">
        <div className="flex items-center gap-3">
          <p className="text-p1">#{market_cap_rank}</p>
          <Image
            as={NextImage}
            src={image?.large || image?.small || image?.thumb}
            width={100}
            height={100}
            alt={name}
            radius="full"
            className="w-[40px] h-[40px]"
          />
          <p>
            {name}
            <span className="uppercase border py-1 px-2 rounded-lg text-p2">
              {symbol}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <p className="font-bold">$ {current_price.toLocaleString()}</p>
          <div
            className={`flex items-center gap-2 ${
              change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {change >= 0 ? <TrendUp /> : <TrendDown />}
            <p className="font-medium text-p1">{change.toFixed(2)}%</p>
          </div>
        </div>
      </div> */}
      <AreaChart
        className="h-80"
        data={chartdata}
        index="date"
        categories={["Price 24h"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        showAnimation={true}
        animationDuration={1300}
      />
    </div>
  );
};

export default PriceChart;
