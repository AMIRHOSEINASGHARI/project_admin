"use client";

// react
import { useState } from "react";
// cmp
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/form/CustomInput";
import DetailedBox from "@/components/shared/layout/DetailedBox";

const CreateUserTab = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    country: "",
    password: "",
    confirmPassword: "",
    roll: "USER",
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <DetailedBox
      title="New User"
      content={
        <form className="box w-full h-fit flex flex-col gap-5">
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
            <CustomInput
              type="password"
              label="Password"
              name="password"
              value={form.password}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
            />
            <CustomInput
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[280px] h-fit"
            />
          </div>
          <div className="w-full flex justify-end">
            <CustomButton
              title="Create"
              type="submit"
              classNames={`w-fit rounded-btn py-2.5 px-5 text-p1 font-medium ${
                loading ? "bg-lightGray" : "bg-dark1 text-white"
              }`}
              isLoading={loading}
            />
          </div>
        </form>
      }
    />
  );
};

export default CreateUserTab;
