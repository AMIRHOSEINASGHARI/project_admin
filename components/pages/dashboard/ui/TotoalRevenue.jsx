"use client";

// constants
import { totalRevenueChartOptions, totalRevenueChartSeries } from "@/constants";
// cmp
import ReactApexChart from "react-apexcharts";

const TotoalRevenue = () => {
  return (
    <div className="w-full cardShadow rounded-xl p-4 bg-white flex flex-col flex-1">
      <h1 className="h3 mb-3">Totoal Revenue</h1>
      <div className="w-full h-full flex items-center justify-center">
        <ReactApexChart
          height={400}
          options={totalRevenueChartOptions}
          series={totalRevenueChartSeries}
          type="bar"
        />
      </div>
    </div>
  );
};

export default TotoalRevenue;
