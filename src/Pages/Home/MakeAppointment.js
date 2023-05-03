import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl text-primary font-bold mb-5">Appointment</h3>
        <h2 className="text-3xl text-white mb-5">Make an Appointment Today</h2>
        <p className="text-white mb-5">
          Make an appointment today to receive quality medical care,
          personalized attention, and expert advice from licensed healthcare
          professionals. With convenient online booking and flexible scheduling
          options, you can choose a time and date that works best for you, and
          receive care from the comfort of your own home. Don't wait to
          prioritize your health – book an appointment now and take the first
          step towards wellness.
        </p>
        <a href="https://mosheur-online-doctors-server-side.onrender.com/appointment">
          <PrimaryButton>Get Started</PrimaryButton>
        </a>
      </div>
    </section>
  );
};

export default MakeAppointment;
