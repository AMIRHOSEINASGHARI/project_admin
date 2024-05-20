// next
import Image from "next/image";
// constants
import { images } from "@/constants";
// cmp
import moment from "moment";
import CustomButton from "@/components/shared/CustomButton";

const AvatarSection = ({ data }) => {
  return (
    <div className="box flex flex-col items-center gap-5">
      <div>
        <Image
          src={data.avatar || images.person}
          width={300}
          height={300}
          alt={data.username}
          priority
          className="w-[150px] h-[150px] rounded-full object-cover outline outline-2 outline-offset-8 outline-gray-200"
        />
      </div>
      <p className="text-p2 text-darkGray">
        Joined {moment(data.createdAt).format("L")}
      </p>
      <CustomButton
        title="Delete User"
        classNames="bg-lightRose text-darkRose py-2 px-4 rounded-lg font-medium text-p1 mt-5"
      />
    </div>
  );
};

export default AvatarSection;
