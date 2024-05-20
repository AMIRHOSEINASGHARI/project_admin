"use client";

// react
import { useState } from "react";
// hooks
import useServerAction from "@/hooks/callServerAction";
// cmp
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/form/CustomInput";
import UploadImage from "@/components/shared/form/UploadImage";

const ProfileForm = ({
  username,
  name,
  email,
  phoneNumber,
  address,
  country,
}) => {
  const [form, setForm] = useState({
    username: username || "",
    name: name || "",
    email: email || "",
    phoneNumber: phoneNumber || "",
    address: address || "",
    country: country || "",
    image: "",
  });
  const { loading, fn } = useServerAction();

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="box w-full h-fit flex flex-col gap-5">
      <div className="w-full h-fit flex flex-wrap gap-5">
        <CustomInput
          type="text"
          label="Username"
          name="username"
          value={username}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[300px] h-fit"
        />
        <CustomInput
          type="text"
          label="Name"
          name="name"
          value={name}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[300px] h-fit"
        />
        <CustomInput
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[300px] h-fit"
        />
        <CustomInput
          type="text"
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[300px] h-fit"
        />
        <CustomInput
          type="text"
          label="Address"
          name="address"
          value={address}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[300px] h-fit"
        />
        <CustomInput
          type="text"
          label="Country"
          name="country"
          value={country}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[300px] h-fit"
        />
      </div>
      <UploadImage form={form} setForm={setForm} />
      <div className="w-full flex justify-end">
        <CustomButton
          title="Save Changes"
          classNames={`w-fit rounded-btn py-2.5 px-5 text-p1 font-medium ${
            loading ? "bg-lightGray" : "bg-dark1 text-white"
          }`}
          isLoading={loading}
        />
      </div>
    </form>
  );
};

export default ProfileForm;
