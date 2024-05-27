// cmp
import Reviews from "./ui/Reviews";
import TotoalRevenue from "./ui/TotoalRevenue";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <Reviews />
      <div className="flex flex-col xl:flex-row gap-5">
        <TotoalRevenue />
      </div>
    </div>
  );
};

export default DashboardPage;
