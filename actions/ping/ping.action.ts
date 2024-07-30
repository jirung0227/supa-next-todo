"use server";

//파일 명이 고정되어 있지는 않음.
export const pingAction = async () => {
  console.log("pingAction income");
  return "pong";
};
