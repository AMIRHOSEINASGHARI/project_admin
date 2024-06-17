import CustomButton from "@/components/shared/CustomButton";
import BannerCoins from "./BannerCoins";

const CryptoBanner = () => {
  return (
    <section className="box border rounded-box max-lg:py-6 max-lg:px-5 lg:py-8 lg:px-9 relative overflow-hidden">
      <div className="flex items-center max-lg:flex-col gap-4 justify-between">
        <div>
          <h1 className="capitalize h1 max-lg:text-center">
            Make your first trade
          </h1>
          <p className="text-p2 max-lg:text-center">
            Trade more than 500 cryptocurrency and fiat pairs, including
            Bitcoin, Ethereum, and Litecoin
          </p>
        </div>
        <CustomButton
          title="Start Trade Now"
          classNames="py-4 px-7 font-bold rounded-full bg-darkBlue text-white shadow-2xl shadow-blue-400 hover:bg-blue-700 Transition"
        />
      </div>
      <BannerCoins />
    </section>
  );
};

export default CryptoBanner;
