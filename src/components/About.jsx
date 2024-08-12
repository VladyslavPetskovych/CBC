import React from "react";

function About() {
  return (
    <>
      <div className="bg-greenlogo font-oswald h-screen flex items-start justify-center relative">
        <h1 className="text-white text-6xl mt-16 text-outline-black z-10">
          About us
        </h1>
        <div className="absolute -mt-48 bg-greenlogo2 h-96 w-96 rotate-45 z-5 opacity-100"></div>
        <div className="absolute w-[80%] md:w-1/4 h-1/4 left-5 md:left-28 top-1/4 flex items-center justify-center">
          <p className="text-white text-4xl bg-white text-outline-black rounded-full px-9 m-3 flex items-center justify-center w-24 h-24">
            ✓
          </p>

          <p className="">
            We provide an effective platform for cooperation, promotion and
            implementation of development, innovation, and investment projects.
            Our activities are aimed at a sustainable strategic partnership and
            contributes to improving the quality and sustainable development of
            the industry
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
