"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
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
          src={images.authLogin}
          width={450}
          height={450}
          alt="auth-login"
          priority
        />
      </div>
      <div className="max-xl:flex max-xl:justify-center max-xl:mt-16 max-xl:w-full">
        <div className="sm:w-[400px]">
          <div className="mb-[20px]">
            <div className="mb-[30px]">
              <Image
                src={images.logo}
                width={40}
                height={40}
                alt="logo"
                priority
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
            <Alert
              description={
                <p>
                  Use usernmae : <span className="font-bold">test-demo</span> /
                  password : <span className="font-bold">demo1234</span>
                </p>
              }
              type="info"
              showIcon
            />
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
              title={loading ? <Loader width={20} height={20} /> : "Login"}
              disabled={loading}
              classNames={`${
                loading ? "bg-gray-100 text-black" : "bg-black text-white"
              } w-full h-[50px] font-bold flex items-center justify-center`}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
