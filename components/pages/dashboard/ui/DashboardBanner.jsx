// utils
import { getServerSession } from "@/utils/session";
// cmp
import CustomButton from "@/components/shared/CustomButton";
// constants
import { images } from "@/constants";
import Image from "next/image";
const DashboardBanner = () => {
  const session = getServerSession();

  return (
    <div className="py-[50px] px-[30px] xl:py-[60px] xl:px-[50px] rounded-btn bg-gradient-to-tr from-green-100 to-green-50 flex max-xl:flex-col gap-5 justify-between items-center">
      <div className="flex flex-col gap-5 max-xl:items-center w-full">
        <h1 className="text-h2 font-bold max-xl:text-center">
          Welcome back 👋 <span className="capitalize">{session.name}</span>
        </h1>
        <p className="max-xl:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nulla
          eveniet ab eos maiores ex odio officiis optio assumenda possimus
          deserunt dolorem exercitationem quisquam nam vero saepe quae quos
          aperiam?
        </p>
        <CustomButton
          title="Go now"
          classNames="w-fit bg-dark1 text-white p-btn rounded-btn"
        />
      </div>
      <div>
        <Image
          src={images.authLogin}
          width={300}
          height={300}
          alt="user"
          priority
        />
      </div>
    </div>
  );
};

export default DashboardBanner;
