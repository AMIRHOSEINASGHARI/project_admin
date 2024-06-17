// cmp
import DashboardBanner from "./ui/DashboardBanner";
import NewInvoices from "./ui/NewInvoices";
import RevenueCompare from "./ui/RevenueCompare";
import Reviews from "./ui/Reviews";
import TotoalRevenue from "./ui/TotoalRevenue";
import UpcommingEvents from "./ui/UpcommingEvents";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <DashboardBanner />
      <Reviews />
      <div className="xl:flex xl:gap-5">
        <RevenueCompare />
        <TotoalRevenue />
      </div>
      <div className="xl:flex xl:gap-5">
        <NewInvoices />
        <UpcommingEvents />
      </div>
    </div>
  );
};

export default DashboardPage;
