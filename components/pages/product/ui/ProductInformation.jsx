// next
import Image from "next/image";
// constants
import { productInformationDetails } from "@/constants";
// components
import moment from "moment";
import Avatars from "./Avatars";
import { Clock } from "@/components/icons/Icons";

const ProductInformation = ({ info }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="w-full xl:w-[60%] h-fit flex justify-center">
        <Image
          src={info?.image}
          width={500}
          height={500}
          alt={info?.title}
          priority
        />
      </div>
      <div className="w-full xl:w-[40%] space-y-5">
        <div className="flex gap-2 items-center">
          <Clock
            className="text-darkGray"
            wrapperClassName="cardShadow rounded-lg p-3"
          />
          <div>
            <p className="font-bold text-darkGray text-sm">
              {moment(info?.createdAt).calendar()}
            </p>
            <p className="text-xs text-darkGray">
              {moment(info?.createdAt).format("LT")}
            </p>
          </div>
        </div>
        <p
          className={`text-sm font-bold ${
            info?.stock !== 0 ? "text-darkGreen" : "text-darkRose"
          }`}
        >
          {info?.stock !== 0 ? "In Stock" : "Out of Stock"}
        </p>
        <p className="font-bold text-2xl">{info?.title}</p>
        <div className="flex items-center gap-3">
          <p className="text-sm text-darkGray">
            ({info?.orders?.length} Orders)
          </p>
          <Avatars orders={JSON.parse(JSON.stringify(info?.orders))} />
        </div>
        <p className="text-darkGray text-sm">{info?.description}</p>
        <hr />
        {productInformationDetails(info).map((item) => (
          <div key={item.value} className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              {item.icon}
              <p className="text-sm text-darkGray">{item.name}</p>
            </div>
            <p className="text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInformation;
