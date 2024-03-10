import React from "react";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          className="md:w-[500px] sm:pr-6 sm:w-[400px]  w-[300px] mx-auto my-4 pb-3"
          src="https://th.bing.com/th/id/R.35b24f0ca9bcd3c7fb90bf60f37a0045?rik=NLuh%2bNfsEdSQCw&riu=http%3a%2f%2faafiyahtech.com%2fwp-content%2fuploads%2f2019%2f02%2fcloud-migration-main-4.svg.png&ehk=eay7qvw2dygJWmv8LxRLCEF40aZ5vsvTi1w65nKjck8%3d&risl=&pid=ImgRaw&r=0"
          alt="/"
        />
        <div className=" flex flex-col justify-center md:text-start sm:text-center text-center ">
          <p className="bg-gradient-to-r from-green-400 to-blue-400font-bold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm-text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, quia
            repudiandae provident atque minus totam nulla quasi sint quidem modi
            libero, tempora voluptatem nostrum magni enim quibusdam architecto
            nobis sed?
          </p>
          <button className="bg-black w-[200px] rounded-md bg-gradient-to-r from-green-400 to-blue-400 font-medium py-3 my-6 mx-auto md:mx-0 px-6">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
