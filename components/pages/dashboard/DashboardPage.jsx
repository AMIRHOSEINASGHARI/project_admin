// cmp
import DashboardBanner from "./ui/DashboardBanner";
import Reviews from "./ui/Reviews";
import TotoalRevenue from "./ui/TotoalRevenue";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* <DashboardBanner /> */}
      <Reviews />
      <TotoalRevenue />
    </div>
  );
};

export default DashboardPage;
