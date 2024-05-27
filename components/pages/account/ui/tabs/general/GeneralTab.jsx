// actions
import { getCurrentAdmin } from "@/actions/admin";
// cmp
import AvatarSection from "./AvatarSection";
import ProfileForm from "./ProfileForm";

const GeneralTab = async () => {
  try {
    const data = await getCurrentAdmin();

    if (data.code !== 200) {
      return <p>Error</p>;
    }

    return (
      <div className="flex flex-col xl:flex-row gap-5">
        <AvatarSection data={data} />
        <ProfileForm {...JSON.parse(JSON.stringify(data))} />
      </div>
    );
  } catch (error) {
    return <p>Error!</p>;
  }
};

export default GeneralTab;
