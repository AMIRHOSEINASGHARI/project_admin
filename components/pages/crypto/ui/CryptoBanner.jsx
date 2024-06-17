import CustomButton from "@/components/shared/CustomButton";

const CryptoBanner = () => {
  return (
    <section className="bg-dark2 rounded-box max-lg:py-6 max-lg:px-5 lg:py-8 lg:px-9 relative overflow-hidden">
      <div className="flex justify-center">
        <div className="bg-blue-600 absolute top-0 h-[30%] w-[90%] rounded-b-full blur-3xl" />
      </div>
      <div className="flex items-center max-lg:flex-col gap-4 justify-between">
        <div>
          <h1 className="capitalize h1 max-lg:text-center text-white">
            Make your first trade
          </h1>
          <p className="text-p2 max-lg:text-center text-white">
            Trade more than 500 cryptocurrency and fiat pairs, including
            Bitcoin, Ethereum, and Litecoin
          </p>
        </div>
        <CustomButton
          title="Start Trade Now"
          classNames="py-4 px-7 font-bold rounded-full text-white bg-darkBlue shadow-2xl shadow-blue-700 hover:bg-blue-700 Transition"
        />
      </div>
    </section>
  );
};

export default CryptoBanner;
