// cmp
import { LeftAngle } from "@/components/icons/Icons";
import CustomLink from "@/components/shared/CustomLink";
import DetailedBox from "@/components/shared/layout/DetailedBox";
import GeneralInformation from "./GeneralInformation";
import UserOrders from "./UserOrders";

const User = ({ user }) => {
  const generalInfoProps = {
    avatar: user.avatar,
    username: user.username,
    displayName: user.displayName,
    phoneNumber: user.phoneNumber,
    address: user.address,
  };

  return (
    <div className="flex flex-col gap-5">
      <CustomLink
        href="/users"
        icon={<LeftAngle size={10} />}
        title="Users"
        className="backLink"
      />
      <div className="flex flex-col gap-5">
        <DetailedBox
          title="General"
          children={<GeneralInformation {...generalInfoProps} />}
        />
        <DetailedBox
          title="Orders"
          children={
            <UserOrders orders={JSON.parse(JSON.stringify(user.orders))} />
          }
        />
      </div>
    </div>
  );
};

export default User;