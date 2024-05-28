"use client";

// react
import { useState } from "react";
// actions
import { createAdmin } from "@/actions/admin";
// hooks
import useServerAction from "@/hooks/callServerAction";
// cmp
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/form/CustomInput";
import DetailedBox from "@/components/shared/layout/DetailedBox";
import CustomSelect from "@/components/shared/form/CustomSelect";
import toast from "react-hot-toast";

const CreateUserTab = () => {
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

  const { loading, fn } = useServerAction(createAdmin, form);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !form.username ||
      !form.name ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.error("Fill fields requiered!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Confirm password is In-Correct");
      return;
    }

    fn();
  };

  return (
    <DetailedBox
      title="New User"
      content={
        <form
          className="box w-full h-fit flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          <div className="w-full h-fit flex flex-wrap gap-5">
            <CustomInput
              type="text"
              label="Username *"
              name="username"
              value={form.username}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomInput
              type="text"
              label="Name *"
              name="name"
              value={form.name}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomInput
              type="password"
              label="Password *"
              name="password"
              value={form.password}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomInput
              type="password"
              label="Confirm Password *"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomInput
              type="email"
              label="Email"
              name="email"
              value={form.email}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomInput
              type="text"
              label="Phone Number"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomInput
              type="text"
              label="Address"
              name="address"
              value={form.address}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomInput
              type="text"
              label="Country"
              name="country"
              value={form.country}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
            />
            <CustomSelect
              name="roll"
              label="Role"
              options={["ADMIN", "USER"]}
              value={form.roll}
              onChange={onChange}
              wrapperClassName="w-full flex flex-1 min-w-[250px] h-fit"
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
