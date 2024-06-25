"use client";

// react
import { useState } from "react";
// next
import NextImage from "next/image";
// cmp
import { Close, EyeOpen } from "@/components/icons/Icons";
import CustomButton from "@/components/shared/CustomButton";
import { Tooltip } from "antd";
import { Image } from "@nextui-org/react";

const FullScreenImage = ({ image, title }) => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div>
      <div className="w-full flex justify-end absolute bottom-5 right-5">
        <Tooltip title="Full Screen Image" placement="bottom">
          <CustomButton
            icon={<EyeOpen />}
            classNames="w-fit text-white p-3 bg-white/20 rounded-full"
            onClick={() => setFullScreen(true)}
          />
        </Tooltip>
      </div>
      {fullScreen && (
        <div
          className="w-full h-screen fixed z-40 inset-0 bg-black/70 p-8 space-y-5 cursor-pointer"
          onClick={() => setFullScreen(false)}
        >
          <div className="w-full flex justify-end">
            <CustomButton
              icon={<Close size={25} />}
              onClick={() => setFullScreen(false)}
              classNames="text-white bg-white/30 hover:bg-white/40 Transition p-3 rounded-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              as={NextImage}
              src={image}
              width={1920}
              height={500}
              alt={title}
              className="w-[800px]"
              radius="none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenImage;
