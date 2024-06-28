// next
import Link from "next/link";
import NextImage from "next/image";
// constants
import { images } from "@/constants";
// cmp
import { Image } from "@nextui-org/image";

const CoinItem = ({ data, index }) => {
  return (
    <Link
      key={data.id}
      href={`/crypto/${data.id}`}
      className="flex items-center gap-6 hover:bg-gray-200 rounded-lg p-2 Transition"
    >
      <p className="text-p1">{index + 1}.</p>
      <Image
        as={NextImage}
        src={data?.large || data?.thumb || images.person}
        width={100}
        height={100}
        alt="coin item"
        radius="none"
        className="w-[40px] h-[40px]"
      />
      <p className="text-p1 flex gap-2">
        <span className="text-darkGray">#{data.market_cap_rank}</span>
        <span className="font-bold">{data.name}</span>
      </p>
    </Link>
  );
};

export default CoinItem;
