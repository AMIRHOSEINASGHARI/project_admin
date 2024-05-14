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
    <div className="flex flex-col xl:flex-row gap-box">
      <div className="w-full xl:w-[50%] h-fit flex justify-center box border">
        <Image
          src={info?.image}
          width={500}
          height={500}
          alt={info?.title}
          priority
        />
      </div>
      <div className="w-full xl:w-[50%] space-y-5 box border">
        <div className="flex gap-2 items-center">
          <Clock
            className="text-darkGray"
            wrapperClassName="cardShadow rounded-btn p-3"
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
          className={`text-p1 font-bold ${
            info?.stock !== 0 ? "text-darkGreen" : "text-darkRose"
          }`}
        >
          {info?.stock !== 0 ? "In Stock" : "Out of Stock"}
        </p>
        <p
          className={`p-btn text-p2 w-fit rounded-btn font-bold ${
            info?.published
              ? "text-darkBlue bg-lightBlue"
              : "text-darkGray bg-lightGray"
          }`}
        >
          {info?.published ? "Published" : "Draft"}
        </p>
        <p className="font-bold text-h3">{info?.title}</p>
        <div className="flex items-center gap-3">
          <p className="text-p1 text-darkGray">
            ({info?.orders?.length} Orders)
          </p>
          <Avatars orders={JSON.parse(JSON.stringify(info?.orders))} />
        </div>
        <p className="text-darkGray text-p1">{info?.description}</p>
        <hr />
        {productInformationDetails(info).map((item) => (
          <div key={item.value} className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              {item.icon}
              <p className="text-p1 text-darkGray">{item.name}</p>
            </div>
            <p className="text-p1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInformation;
