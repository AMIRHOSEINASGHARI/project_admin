"use client";

// react
import { useState } from "react";
// actions
import { updateProfile } from "@/actions/admin";
// react query
import { useQueryClient } from "@tanstack/react-query";
// utils
import { uploadImage } from "@/utils/functions";
// cmp
import { LockClosed } from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/form/CustomInput";
import UploadImage from "@/components/shared/form/UploadImage";
import toast from "react-hot-toast";

const ProfileForm = (props) => {
  const { username, name, email, phoneNumber, address, country } =
    props.currentAdmin;

  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: username || "",
    name: name || "",
    email: email || "",
    phoneNumber: phoneNumber || "",
    address: address || "",
    country: country || "",
    image: [],
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (form.username.length === 0) {
      toast.error("Username cannot be empty!");
      return;
    }

    if (
      form.currentPassword.length !== 0 ||
      form.newPassword.length !== 0 ||
      form.confirmNewPassword.length !== 0
    ) {
      if (
        form.currentPassword.length === 0 ||
        form.newPassword.length === 0 ||
        form.confirmNewPassword.length === 0
      ) {
        toast.error("Fill other Fields");
        return;
      }

      if (form.newPassword !== form.confirmNewPassword) {
        toast.error("Confirm New Password is InCorrect!");
        return;
      }
    }

    setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    //   toast.success("Profile Updated!");
    // }, 1000);

    let newForm = { ...form };

    if (form.image.length !== 0) {
      const uploadResult = await uploadImage(form.image[0]);
      newForm = {
        ...form,
        image: uploadResult.imageUrl,
      };
    }

    const result = await updateProfile(newForm);

    setLoading(false);

    if (result.code !== 200) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
      queryClient.invalidateQueries("session");
    }
  };

  return (
    <form className="box w-full h-fit flex flex-col gap-5" onSubmit={onSubmit}>
      <div className="w-full h-fit flex flex-wrap gap-5">
        <CustomInput
          type="text"
          label="Username"
          name="username"
          value={form.username}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
        />
        <CustomInput
          type="text"
          label="Name"
          name="name"
          value={form.name}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
        />
        <CustomInput
          type="email"
          label="Email"
          name="email"
          value={form.email}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
        />
        <CustomInput
          type="text"
          label="Phone Number"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
        />
        <CustomInput
          type="text"
          label="Address"
          name="address"
          value={form.address}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
        />
        <CustomInput
          type="text"
          label="Country"
          name="country"
          value={form.country}
          onChange={onChange}
          wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
        />
      </div>
      <UploadImage form={form} setForm={setForm} />
      <div className="flex items-center gap-4">
        <LockClosed wrapperClassName="cardShadow rounded-lg p-3" />
        <p className="text-p1 font-medium">Changing Password</p>
      </div>
      <CustomInput
        type="password"
        label="Current Password"
        name="currentPassword"
        value={form.currentPassword}
        onChange={onChange}
        wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
      />
      <CustomInput
        type="password"
        label="New Password"
        name="newPassword"
        value={form.newPassword}
        onChange={onChange}
        wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
      />
      <CustomInput
        type="password"
        label="Confirm New Password"
        name="confirmNewPassword"
        value={form.confirmNewPassword}
        onChange={onChange}
        wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
      />
      <div className="w-full flex justify-end">
        <CustomButton
          title="Save Changes"
          type="submit"
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
