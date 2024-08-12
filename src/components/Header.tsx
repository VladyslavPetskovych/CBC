import React from "react";

export default function Header() {
  return (
    <div className="bg-white h-[70px] flex items-center justify-between border-neutral-900 border shadow-2xl px-4">
      <p className="text-bluelogo font-bold flex-grow text-center text-lg md:text-2xl">
        Cyprus Business Club
      </p>
      <button className="mr-4 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>
      </button>
      <div className="hidden  md:flex items-center space-x-4 text-xl text-white font-oswald h-full ">
        <button className="px-4 bg-yellowlogo text-outline-black h-full">
          Join club
        </button>
        <button className="px-4 bg-yellowlogo text-outline-black h-full">
          Discount
        </button>
        <button className="px-3 bg-yellowlogo text-outline-black h-full">
          Event schedule
        </button>
        <button className="px-4 bg-yellowlogo text-outline-black h-full ">
          Contact us
        </button>
      </div>
    </div>
  );
}
