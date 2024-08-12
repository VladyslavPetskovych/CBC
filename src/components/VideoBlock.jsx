import React from "react";
import "../index.css";
import logo from "../assets/header/loggg.png";

function Button() {
  return (
    <div className="flex flex-col w-1/3 sm:w-auto sm:flex-row p-4">
      <a
        href=""
        className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4  font-bold bg-greenlogo leading-6 capitalize duration-100 text-2xl text-white transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto     hover:shadow-lg hover:-translate-y-1"
      >
        Contact us
        <span className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
          >
            <path
              fill="currentColor"
              d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
            ></path>
          </svg>
        </span>
      </a>
    </div>
  );
}

export default function VideoBlock() {
  return (
    <div className="relative bg-black w-full min-h-screen overflow-hidden flex flex-row items-center justify-center z-10">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-auto min-h-full object-cover opacity-65"
          style={{ objectPosition: "0px -600px" }}
          src="https://res.cloudinary.com/dnyy3dh2w/video/upload/v1723411137/IMG_8216_nmh0ob.mp4"
          type="video/mp4"
          loop
          autoPlay
          muted
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full p-5">
        <img
          src={logo}
          alt=""
          className="w-72 h-72 object-contain bg-white rounded-full bg-opacity-40"
        />
        <Button />
        <p className="text-white text-center text-4xl font-oswald ">
          Improve your business and <span>make strong connections</span>
        </p>
      </div>
    </div>
  );
}
