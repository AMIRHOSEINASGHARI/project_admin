// react
import { Suspense } from "react";
// cmp
import DashboardBanner from "./ui/DashboardBanner";
import NewInvoices from "./ui/NewInvoices";
import RevenueCompare from "./ui/RevenueCompare";
import Reviews from "./ui/Reviews";
import TotoalRevenue from "./ui/TotoalRevenue";
import UpcommingEvents from "./ui/UpcommingEvents";
import Loader from "@/components/shared/Loader";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* <DashboardBanner /> */}
      <Reviews />
      <div className="xl:flex xl:gap-5">
        <RevenueCompare />
        <TotoalRevenue />
      </div>
      <div className="xl:flex xl:gap-5">
        <NewInvoices />
        <Suspense
          fallback={
            <div className="box flex items-center justify-center w-full max-w-[400px] h-[300px]">
              <Loader />
            </div>
          }
        >
          <UpcommingEvents />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardPage;
