import React from "react";

function About() {
  return (
    <div className="bg-greenlogo font-oswald h-screen flex items-start justify-center relative">
      <h1 className="text-white text-6xl mt-16 text-outline-black z-10"> Our Goals</h1>
      <div className="absolute -mt-48 bg-greenlogo2 h-96 w-96 rotate-45 z-5 opacity-100"></div>
    </div>
  );
}

export default About;
