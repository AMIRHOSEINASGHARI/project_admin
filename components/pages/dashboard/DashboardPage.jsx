// cmp
import Reviews from "./ui/Reviews";
import TotoalRevenue from "./ui/TotoalRevenue";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <Reviews />
      <TotoalRevenue />
    </div>
  );
};

export default DashboardPage;
