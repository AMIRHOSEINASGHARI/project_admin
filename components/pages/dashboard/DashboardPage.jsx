// cmp
import DashboardBanner from "./ui/DashboardBanner";
import NewInvoices from "./ui/NewInvoices";
import RevenueCompare from "./ui/RevenueCompare";
import Reviews from "./ui/Reviews";
import TotoalRevenue from "./ui/TotoalRevenue";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* <DashboardBanner /> */}
      <Reviews />
      <div className="xl:flex xl:gap-5">
        <RevenueCompare />
        <TotoalRevenue />
      </div>
      <NewInvoices />
    </div>
  );
};

export default DashboardPage;
