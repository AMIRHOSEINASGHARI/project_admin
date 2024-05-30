// next
import NextImage from "next/image";
// constants
import { images } from "@/constants";
// cmp
import { Image } from "@nextui-org/image";

const CustomAvatar = ({ title, image, imageSize }) => {
  return (
    <div className="bg-gray-200 rounded-full flex items-center">
      <Image
        as={NextImage}
        src={image || images.admin}
        width={imageSize || 30}
        height={imageSize || 30}
        alt="image"
        radius="full"
      />
      <span className="text-p2 font-medium">{title.split(" ")[0]}</span>
    </div>
  );
};

export default CustomAvatar;
