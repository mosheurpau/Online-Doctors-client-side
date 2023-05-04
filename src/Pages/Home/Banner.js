import React from "react";
import doctors from "../../assets/images/doctors.png";
import PrimaryButton from "../Shared/PrimaryButton";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className=" hero min-h-screen bg-[url('/src/assets/images/bg.png')] px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src={doctors}
            className="min-w-sm lg:max-w-sm rounded-lg shadow-2xl"
            alt="Banner"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-white">
            <Typewriter
              options={{
                strings: [
                  `I'M <span style="color: #19D3AE;">MOSHEUR</span>
            <span> RAHMAN</span> Welcome to
            <span style= "color: #0FCFEC;" >Online</span> Doctors. Find The
            Best <span style= "color: #0FCFEC;" >Doctor</span> Near By You.`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="py-6 text-white">
            Online doctor appointments allow patients to consult with a doctor
            remotely through video calls, phone calls, or messaging platforms.
            They offer convenience, cost savings, and increased accessibility,
            particularly for patients in rural or remote areas.
          </p>
          <a href="https://mosheur-online-doctors-server-side.onrender.com/appointment">
            <PrimaryButton>FIND A DOCTOR</PrimaryButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
