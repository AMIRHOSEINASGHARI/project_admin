// next
import Image from "next/image";
// constants
import { images } from "@/constants";
// cmp
import moment from "moment";
import { getServerSession } from "@/utils/session";

const AvatarSection = ({ data }) => {
  const session = getServerSession();

  return (
    <div className="box flex flex-col items-center gap-5 w-full xl:w-[40%] h-fit">
      <div>
        <Image
          src={data.currentAdmin.avatar || images.admin}
          width={300}
          height={300}
          alt={data.currentAdmin.username}
          priority
          className="w-[150px] h-[150px] rounded-full object-cover outline outline-2 outline-offset-8 outline-gray-200"
        />
      </div>
      <p className="text-p2 text-darkGray">
        Joined {moment(data.currentAdmin.createdAt).format("L")}
      </p>
      <span className="bg-lightBlue text-darkBlue rounded-btn py-1 px-3 text-p2">
        {session.roll}
      </span>
    </div>
  );
};

export default AvatarSection;
