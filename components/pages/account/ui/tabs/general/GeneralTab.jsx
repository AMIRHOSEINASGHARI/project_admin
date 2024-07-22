// actions
import { getCurrentAdmin } from "@/actions/admin";
// cmp
import AvatarSection from "./AvatarSection";
import ProfileForm from "./ProfileForm";

const GeneralTab = async () => {
  const data = await getCurrentAdmin();

  return (
    <div className="flex flex-col xl:flex-row gap-5">
      <AvatarSection data={data} />
      <ProfileForm {...JSON.parse(JSON.stringify(data))} />
    </div>
  );
};

export default GeneralTab;
