// next
import NextImage from "next/image";
// utils
import { shorterText } from "@/utils/functions";
// constants
import { images } from "@/constants";
// cmp
import { Empty } from "antd";
import { Image } from "@nextui-org/react";

const LikesTab = ({ likes }) => {
  if (likes.length === 0) {
    return <Empty description="No Likes!" />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-box">
      {likes.map((like) => {
        const { _id, user } = like;

        return (
          <div key={_id} className="flex flex-col items-center">
            <Image
              as={NextImage}
              src={user.avatar || images.person}
              width={60}
              height={60}
              alt={shorterText(user.displayName, 10)}
              className="mb-2 rounded-full"
            />
            <p className="font-medium">{user.displayName || user.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LikesTab;
