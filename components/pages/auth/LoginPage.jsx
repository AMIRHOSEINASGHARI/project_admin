"use client";

// react
import { useState } from "react";
// next
import NextImage from "next/image";
import { useRouter } from "next/navigation";
// actions
import { login } from "@/actions/auth";
// hooks
import useServerAction from "@/hooks/callServerAction";
// constants
import { images } from "@/constants";
// components
import toast from "react-hot-toast";
import { Alert } from "antd";
import CustomInput from "@/components/shared/form/CustomInput";
import CustomButton from "@/components/shared/CustomButton";
import Loader from "@/components/shared/Loader";
import CustomBadge from "@/components/shared/CustomBadge";
import { Image } from "@nextui-org/react";

const LoginPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const { loading, fn } = useServerAction(login, form, () =>
    router.push("/dashboard")
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.password || !form.username) {
      toast.error("Fill all fields!");
      return;
    }

    fn();
  };

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-[150px] bg-white p-[30px]"
    >
      <div className="max-xl:hidden bg-gray-100 rounded-3xl h-screen w-1/2 flex items-center justify-center">
        <Image
          as={NextImage}
          src={images.authLogin}
          width={450}
          height={450}
          alt="auth-login"
        />
      </div>
      <div className="max-xl:flex max-xl:justify-center max-xl:mt-16 max-xl:w-full">
        <div className="sm:w-[400px]">
          <div className="mb-[20px]">
            <div className="mb-[30px]">
              <Image
                as={NextImage}
                src={images.logo}
                width={40}
                height={40}
                alt="logo"
              />
            </div>
            <h1 className="font-medium text-gray-600 text-[30px] mb-[10px]">
              Welcome back! 👋🏻
            </h1>
            <p className="text-gray-500 tracking-tight">
              Please sign-in to your account and start the adventure
            </p>
          </div>
          <div className="space-y-5">
            <CustomInput
              name="username"
              type="text"
              label="Username"
              value={form.username}
              onChange={changeHandler}
            />
            <CustomInput
              name="password"
              type="password"
              label="Password"
              value={form.password}
              onChange={changeHandler}
            />
            <CustomButton
              type="submit"
              title={"Login"}
              isLoading={loading}
              disabled={loading}
              classNames={`${
                loading ? "bg-gray-100 text-black" : "bg-black text-white"
              } w-full h-[50px] font-bold flex items-center justify-center rounded-btn`}
            />
            <Alert
              description={
                <div className="space-y-2">
                  <p>
                    Owner usernmae :{" "}
                    <span className="font-bold">owner-demo</span> / password :{" "}
                    <span className="font-bold">demo1234</span>
                  </p>
                  <p>
                    Admin usernmae :{" "}
                    <span className="font-bold">admin-demo</span> / password :{" "}
                    <span className="font-bold">demo1234</span>
                  </p>
                  <p>
                    User usernmae : <span className="font-bold">user-demo</span>{" "}
                    / password : <span className="font-bold">demo1234</span>
                  </p>
                </div>
              }
              type="info"
              showIcon
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
