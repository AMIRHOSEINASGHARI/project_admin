import CryptoBanner from "./ui/CryptoBanner";
import CryptoList from "./ui/CryptoList";

const CryptoPage = () => {
  return (
    <div className="space-y-5">
      <CryptoBanner />
      <CryptoList />
    </div>
  );
};

export default CryptoPage;
