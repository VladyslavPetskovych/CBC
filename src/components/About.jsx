import React from "react";

function About() {
  return (
    <div className="bg-greenlogo font-oswald h-full flex flex-col items-center justify-start relative">
      <h1 className="text-white text-6xl text-outline-black m-16 mt-20 z-10">
        About us
      </h1>
      <div className="absolute -mt-48 bg-greenlogo2 h-96 w-96 rotate-45 z-5 opacity-100"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl p-4 relative z-10">
        <div className="flex items-center justify-center flex-row p-4 bg-greenlogo3 rounded-lg shadow-lg">
          <p className="text-white text-4xl bg-white text-outline-black rounded-full px-9 py-6 flex items-center justify-center w-24 h-24 mb-4">
            ✓
          </p>
          <p className="text-white text-center">
            We provide an effective platform for cooperation, promotion and
            implementation of development, innovation, and investment projects.
            Our activities are aimed at a sustainable strategic partnership and
            contribute to improving the quality and sustainable development of
            the industry.
          </p>
        </div>
        <div className="flex items-center justify-center flex-row p-4 bg-greenlogo3 rounded-lg shadow-lg">
          <p className="text-white text-center">
            CBС Innovation & Development Society (CBC ID) - is a professional
            business association uniting top managers and owners of leading
            companies, experts in the field of construction and real estate in
            Cyprus and Europe.
          </p>
          <p className="text-white text-4xl bg-white text-outline-black rounded-full px-9 py-6 flex items-center justify-center w-24 h-24 mb-4">
            ✓
          </p>
        </div>
        <div className="flex items-center justify-center flex-row p-4 bg-greenlogo3 rounded-lg shadow-lg">
          <p className="text-white text-4xl bg-white text-outline-black rounded-full px-9 py-6 flex items-center justify-center w-24 h-24 mb-4">
            ✓
          </p>
          <p className="text-white text-center">
            The organizer of the association was Cyprus Business Club – the
            largest Russian-speaking and international community and ecosystem
            of entrepreneurs in Cyprus with a base of participants and
            subscribers of more than 2000 people
          </p>
        </div>
        <div className="flex items-center justify-center flex-row p-4 bg-greenlogo3 rounded-lg shadow-lg">
          <p className="text-white text-center">
            Joining to CBС Development & Innovation Society – is an increase in
            the reputation rating for each participant
          </p>
          <p className="text-white text-4xl bg-white text-outline-black rounded-full px-9 py-6 flex items-center justify-center w-24 h-24 mb-4">
            ✓
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
