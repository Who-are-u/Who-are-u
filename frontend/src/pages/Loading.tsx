import React from "react";
import Header from "../components/Header";

export default function Loading() {
  return (
    <div
      className="absolute bg-center bg-cover w-full h-full"
      style={{ backgroundImage: "url(images/background.png)" }}
    >
      <Header />
      <div className="flex m-auto justify-center align-items mt-[5rem]">
        <img alt="spinner" src="images/Spinner.png" />
      </div>
      <div className="flex xl:w-[55rem] lg:w-[40rem] md:w-[25rem] sm:w-[20rem] m-auto justify-center align-items mt-[5rem] font-bold xl:text-6xl lg:text-4xl md:text-2xl sm:text-1xl">
        당신을 위한 만화를 그리고 있습니다.
      </div>
      <div className="flex xl:w-[55rem] lg:w-[40rem] md:w-[25rem] sm:w-[20rem] m-auto justify-center align-items mt-[3rem] font-bold xl:text-6xl lg:text-4xl md:text-2xl sm:text-1xl">
        잠시만 기다려 주세요...
      </div>
    </div>
  );
}
