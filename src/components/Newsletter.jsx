import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 sm:text-center md:text-left text-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks optimize your flow?
          </h1>
          <p>sign up ot our newsletter and stay up to date </p>
        </div>
        <div className="my-4">
          <div className=" flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className=" p-3 m-4 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-gradient-to-r from-green-400 to-blue-400 w-[200px] rounded-md text-black font-medium py-3 my-6 mx-auto px-6">
              Notify Me
            </button>
          </div>
          <p className="md:text-left sm:text-left m-4  text-center">
            We care about the protection of your data. Read our{" "}
            <span className="  text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className="pt-10">
        <hr />
      </div>
    </div>
  );
};
