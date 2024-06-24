// next
import Link from "next/link";
import NextImage from "next/image";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import { Image } from "@nextui-org/react";
import { EyeOpen } from "@/components/icons/Icons";

const BlogsResult = ({ blogs, closeModal }) => {
  return (
    <div>
      <h1 className="text-h3 font-medium mb-2">Blogs</h1>
      {blogs.map((blog) => (
        <Link
          href={`/blogs/${blog._id}`}
          key={blog._id}
          className="flex items-center gap-3 flex-wrap justify-between hoverable rounded-btn py-2 px-3"
          onClick={closeModal}
        >
          <div className="flex items-center gap-4">
            <Image
              as={NextImage}
              src={blog.image}
              width={100}
              height={100}
              alt="blog"
              radius="sm"
              className="w-[50px]"
            />
            <p className="text-p1 font-medium">{shorterText(blog.title, 30)}</p>
          </div>
          <EyeOpen />
        </Link>
      ))}
    </div>
  );
};

export default BlogsResult;
