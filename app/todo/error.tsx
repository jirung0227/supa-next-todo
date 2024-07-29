"use client";
import React from "react";
import { BounceLoader } from "react-spinners";

/**
 *
 * @description 클라이언트 컴포넌트 - 서버에서 동작되고 나서 브라우저로 넘어가서 또 이어서 추후 로직들 작동
 */
const Error = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <BounceLoader />
      </div>
      <div className="font-bold my-2">There is something wrong...</div>
    </div>
  );
};

export default Error;
