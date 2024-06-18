"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchCoin } from "@/services/queries";
// cmp
import Loader from "@/components/shared/Loader";
import { SparkAreaChart } from "@tremor/react";

const BannerChart = ({ coinId }) => {
  try {
    const { data, isLoading, isError, error } = useQuery({
      queryKey: ["coins", coinId],
      queryFn: fetchCoin,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 365 * 24 * 60 * 60,
      staleTime: 365 * 24 * 60 * 60,
    });

    if (isLoading) {
      return (
        <div className="w-full flex justify-center my-[31px]">
          <Loader width={20} height={20} />
        </div>
      );
    }

    if (isError) {
      throw new Error(error.message);
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
  } catch (error) {
    console.log(error);
    return <p>{JSON.stringify(error.message)}</p>;
  }
};

export default BannerChart;
