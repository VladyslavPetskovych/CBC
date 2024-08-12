import React from "react";

export default function Header() {
  return (
    <div className="bg-white h-[70px] flex align-items-center justify-evenly border-neutral-900 border shadow-2xl ">
      <div className="text-bluelogo">
        <p className="text-left font-bold  m-0 p-0">Cyprus</p>
        <p className="text-left font-bold  ">Business</p>
        <p className="text-left font-bold  ">Club</p>
      </div>
      <div className="flex align-items-center justify-between text-white font-oswald ">
        <button className="mx-2 px-4 bg-yellowlogo text-outline-black">
          Join club
        </button>
        <button className="mx-2 px-4 bg-yellowlogo text-outline-black">
          discount
        </button>
        <button className="ml-3 px-3 bg-yellowlogo text-outline-black">
          Event schedule
        </button>
        <button className="mx-2 px-4 bg-yellowlogo text-outline-black">
          Contact us
        </button>
      </div>
    </div>
  );
}
