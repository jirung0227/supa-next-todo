import { sleep } from "@/lib/utils";
import React from "react";
import TodoContainer from "./components/TodoContainer";

/**
 *
 * @description 서버 컴포넌트 : 서버에서만 동작하고 있는 리액트 컴포넌트
 */
const Page = async () => {
  //   throw new Error("custom error");
  //   console.log(">>API call start");
  //   await sleep(1500);
  //   console.log(">>API call end");
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default Page;
