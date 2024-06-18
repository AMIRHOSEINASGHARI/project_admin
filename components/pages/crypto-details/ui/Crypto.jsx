// constants
import { coinPageBread } from "@/constants/breadcrumpItems";
// cmp
import PageHeading from "@/components/shared/PageHeading";
import PriceChart from "./PriceChart";
import CustomBreadcrumb from "@/components/shared/CustomBreadcrumb";

const Crypto = ({ data }) => {
  const priceChartComponentProps = {
    image: data?.image,
    name: data?.name,
    symbol: data?.symbol,
    market_cap_rank: data?.market_cap_rank,
    sparkline: data?.market_data?.sparkline_7d,
    current_price: data?.market_data?.current_price["usd"],
    price_change_percentage_24h: data?.market_data?.price_change_percentage_24h,
    price_change_24h: data?.market_data?.price_change_24h,
  };

  return (
    <div>
      <PageHeading title={data?.name} />
      <CustomBreadcrumb items={coinPageBread} />
      <PriceChart {...JSON.parse(JSON.stringify(priceChartComponentProps))} />
    </div>
  );
};

export default Crypto;
