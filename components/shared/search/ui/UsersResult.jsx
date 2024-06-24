// next
import Link from "next/link";
import NextImage from "next/image";
// constants
import { images } from "@/constants";
// cmp
import { Image } from "@nextui-org/react";
import { EyeOpen } from "@/components/icons/Icons";

const UsersResult = ({ users, closeModal }) => {
  return (
    <div>
      <h1 className="text-h3 font-medium mb-2">Users</h1>
      {users.map((user) => (
        <Link
          href={`/users/${user._id}`}
          key={user._id}
          className="flex items-center gap-3 flex-wrap justify-between hoverable rounded-btn py-2 px-3"
          onClick={closeModal}
        >
          <div className="flex items-center gap-4">
            <Image
              as={NextImage}
              src={user.avatar || images.person}
              width={100}
              height={100}
              alt="user"
              radius="full"
              className="w-[40px] h-[40px]"
            />
            <div>
              <p className="text-p1 font-medium">{user.username}</p>
              {user.displayName && (
                <p className="text-p2 text-darkGray">{user.displayName}</p>
              )}
            </div>
          </div>
          <EyeOpen />
        </Link>
      ))}
    </div>
  );
};

export default UsersResult;
