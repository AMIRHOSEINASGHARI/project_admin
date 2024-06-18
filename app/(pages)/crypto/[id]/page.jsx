import CryptoDetailsPage from "@/components/pages/crypto-details/CryptoDetailsPage";

const Crypto = ({ params }) => {
  return <CryptoDetailsPage id={params.id} />;
};

export default Crypto;
