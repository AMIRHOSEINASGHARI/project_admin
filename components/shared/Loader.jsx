"use client";

import { TailSpin } from "react-loader-spinner";

const Loader = ({ width, height, color }) => {
  return (
    <>
      <TailSpin
        visible={true}
        height={height || 30}
        width={width || 30}
        color={color || "#000"}
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </>
  );
};

export default Loader;
