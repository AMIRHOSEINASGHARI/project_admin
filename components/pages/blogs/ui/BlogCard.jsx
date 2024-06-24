// next
import Link from "next/link";
import Image from "next/image";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import CustomBadge from "@/components/shared/CustomBadge";
import BlogCardActions from "./BlogCardActions";
import moment from "moment";
import { BorderHeart, Comment, EyeOpen } from "@/components/icons/Icons";
import { Avatar } from "@nextui-org/react";

const BlogCard = ({
  _id,
  title,
  description,
  image,
  likes,
  createdAt,
  createdBy,
  published,
}) => {
  return (
    <div className="box w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
          <div className="flex items-center gap-3">
            <Link href={`/account/admins/${createdBy._id}`}>
              <Avatar src={createdBy.avatar || images.admin} isBordered />
            </Link>
            <CustomBadge
              title={published ? "Published" : "Draft"}
              colors={
                published
                  ? "bg-lightGreen text-darkGreen"
                  : "bg-lightGray text-darkGray"
              }
            />
          </div>
          <p className="text-darkGray text-p2">
            {moment(createdAt).format("L")}
          </p>
        </div>
        <div className="w-full h-[300px] rounded-2xl overflow-hidden max-sm:hidden">
          <Image
            src={image}
            priority
            width={500}
            height={500}
            alt="blog"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-medium text-p1">{title}</p>
        <p className="text-p1 text-darkGray">{shorterText(description, 150)}</p>
        <div className="flex items-center gap-2 flex-wrap justify-between">
          <BlogCardActions
            blogId={JSON.parse(JSON.stringify(_id))}
            published={JSON.parse(JSON.stringify(published))}
          />
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1 text-darkGray">
              <BorderHeart size={15} />
              <span className="text-p2">{likes.length}</span>
            </div>
            <div className="flex items-center gap-1 text-darkGray">
              <Comment size={15} />
              <span className="text-p2">9.5k</span>
            </div>
            <div className="flex items-center gap-1 text-darkGray">
              <EyeOpen size={15} />
              <span className="text-p2">108.5k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
