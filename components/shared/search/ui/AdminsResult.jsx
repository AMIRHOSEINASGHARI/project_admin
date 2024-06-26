// next
import Link from "next/link";
import NextImage from "next/image";
// constants
import { images } from "@/constants";
// cmp
import { Image } from "@nextui-org/react";

const AdminsResult = ({ admins, closeModal }) => {
  return (
    <div>
      <h1 className="text-h3 font-medium mb-2">Admins</h1>
      {admins.map((admin) => (
        <Link
          href={`/account/admins/${admin._id}`}
          key={admin._id}
          className="flex items-center gap-3 justify-between hoverable rounded-btn py-2 px-3"
          onClick={closeModal}
        >
          <div className="flex items-center gap-4">
            <Image
              as={NextImage}
              src={admin.avatar || images.admin}
              width={100}
              height={100}
              alt="admin"
              radius="full"
              className="w-[40px] h-[40px]"
            />
            <div>
              <p className="text-p1 font-medium line-clamp-4">
                {admin.username}
              </p>
              <p className="text-p2 text-darkGray line-clamp-4">{admin.name}</p>
              <p
                className={`text-p3 py-.5 px-2 rounded-md w-fit ${
                  admin.roll === "OWNER"
                    ? "bg-lightGreen text-darkGreen"
                    : admin.roll === "ADMIN"
                    ? "bg-lightBlue text-darkBlue"
                    : "bg-lightRose text-darkRose"
                }`}
              >
                {admin.roll}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AdminsResult;
