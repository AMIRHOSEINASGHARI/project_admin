"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchCoin } from "@/services/queries";
// cmp
import Loader from "@/components/shared/Loader";
import { SparkAreaChart } from "@tremor/react";

const BannerChart = ({ coinId }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coins", coinId],
    queryFn: fetchCoin,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 7 * 24 * 60 * 60,
    staleTime: 7 * 24 * 60 * 60,
  });

  if (isLoading) {
    return (
      <div className="w-full flex justify-center my-[31px]">
        <Loader width={20} height={20} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="my-2">
        <p>Error!</p>
      </div>
    );
  }

  let chartData2 = [];

  for (let d of data.prices.entries()) {
    if (d[0] % 20 === 0) {
      chartData2.push({
        day: d[1][0],
        Price: d[1][1],
      });
    }
  }

  return (
    <SparkAreaChart
      data={chartData2}
      categories={["Price"]}
      index={"day"}
      colors={["blue"]}
      className="h-[80px] w-full"
      showAnimation={true}
      animationDuration={1300}
    />
  );
};

export default BannerChart;
