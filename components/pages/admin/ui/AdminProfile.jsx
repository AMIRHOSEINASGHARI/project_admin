// next
import Link from "next/link";
import NextImage from "next/image";
// constants
import { images } from "@/constants";
// cmp
import { Image } from "@nextui-org/react";
import { Date, Flag, Location, Mail, Phone } from "@/components/icons/Icons";
import CustomBadge from "@/components/shared/CustomBadge";
import DetailedBox from "@/components/shared/layout/DetailedBox";
import moment from "moment";

const AdminProfile = ({
  data: {
    username,
    name,
    email,
    phoneNumber,
    address,
    country,
    avatar,
    roll,
    createdAt,
    productsCreated,
    blogsCreated,
  },
}) => {
  const overviewContent = (
    <div className="w-full box border flex flex-col items-center gap-1">
      <div className="flex justify-center w-full mb-4">
        <Image
          src={avatar || images.admin}
          width={200}
          height={200}
          alt="admin"
          isZoomed
          isBlurred
          radius="full"
        />
      </div>
      <CustomBadge title={roll} condition={roll === "OWNER"} />
      <p className="text-h3 font-bold">{username}</p>
      <p className="text-p1 text-darkGray font-medium capitalize">{name}</p>
    </div>
  );

  const aboutContent = (
    <div className="w-full box border flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <Location />
        <p className="text-p1 font-medium line-clamp-2">{address || "_"}</p>
      </div>
      <div className="flex items-center gap-5">
        <Mail />
        <p className="text-p1 font-medium line-clamp-2">{email || "_"}</p>
      </div>
      <div className="flex items-center gap-5">
        <Phone />
        <p className="text-p1 font-medium line-clamp-2">{phoneNumber || "_"}</p>
      </div>
      <div className="flex items-center gap-5">
        <Flag />
        <p className="text-p1 font-medium line-clamp-2">{country || "_"}</p>
      </div>
      <div className="flex items-center gap-5">
        <Date />
        <p className="text-p1 font-medium line-clamp-2">
          {moment(createdAt).format("LL")}
        </p>
      </div>
    </div>
  );

  const productsContent =
    productsCreated.length === 0 ? (
      <p>No Products Created!</p>
    ) : (
      <div className="flex flex-wrap gap-6 box border w-full">
        {productsCreated.map((product) => (
          <Link
            href={`/products/${product._id}`}
            className="flex flex-col gap-2 items-center flex-1 min-w-[200px] box border hoverable"
          >
            <Image
              as={NextImage}
              width={100}
              height={100}
              src={product.image}
              alt="product"
            />
            <p className="text-p1 font-medium">${product.price}</p>
            <p className="text-p2">{moment(product.createdAt).format("L")}</p>
          </Link>
        ))}
      </div>
    );

  const blogsContent =
    blogsCreated.length === 0 ? (
      <p>No Blogs Created!</p>
    ) : (
      <div className="flex flex-wrap gap-6 box border w-full">
        {blogsCreated.map((blog) => (
          <Link
            href={`/blogs/${blog._id}`}
            className="flex flex-col gap-2 items-center flex-1 min-w-[200px] box border hoverable"
          >
            <Image
              as={NextImage}
              width={100}
              height={100}
              src={blog.image}
              alt="blog"
            />
            <p className="text-p2">{moment(blog.createdAt).format("L")}</p>
          </Link>
        ))}
      </div>
    );

  return (
    <div className="space-y-5">
      <DetailedBox title="Overview" content={overviewContent} />
      <DetailedBox title="About" content={aboutContent} />
      <DetailedBox title="Products Created" content={productsContent} />
      <DetailedBox title="Blogs Created" content={blogsContent} />
    </div>
  );
};

export default AdminProfile;
