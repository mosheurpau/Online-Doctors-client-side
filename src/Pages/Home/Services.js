import React from "react";
import therapiya from "../../assets/images/therapiya.png";
import dentistry from "../../assets/images/dentistry.png";
import virusology from "../../assets/images/virusology.png";
import Service from "./Service";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Therapiya",
      description:
        "Therapiya is an online therapy service providing mental health support through video and phone sessions with licensed therapists, specializing in treatment for anxiety, depression, and stress.",
      img: therapiya,
    },
    {
      _id: 2,
      name: "Dentistry",
      description:
        "Online dentistry services offer dental consultations, assessments, and advice through video or phone calls, as well as home dental kits, providing convenient and accessible options for patients unable to visit a dental clinic in person.",
      img: dentistry,
    },
    {
      _id: 3,
      name: "Virusology",
      description:
        "Virology services online provide expert analysis and consultation for viral infections, including COVID-19, through telemedicine platforms, offering convenient and accessible options for diagnosis, treatment, and outbreak control.",
      img: virusology,
    },
  ];
  return (
    <div>
      <div className="my-28 px-12">
        <div className="text-center">
          <h3 className="text-primary  text-xl font-bold uppercase">
            Our Services
          </h3>
          <h2 className="text-4xl">Services We Provide</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
      <div className="hero min-h-screen mx-auto">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={treatment}
            className="min-w-sm lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold pb-5">
              Why Choose Online Doctors Clinic?
            </h1>
            <p className="text-justify">
              Choosing an online doctor's clinic offers convenience,
              accessibility, cost savings, and reduced exposure to contagious
              illnesses, allowing patients to receive medical advice,
              prescriptions, and referrals from licensed healthcare providers at
              home.
            </p>
            <h3 className="text-xl font-bold pt-3">+ Quality Control System</h3>
            <p className="text-justify">
              A quality control system ensures that products or services meet
              customer expectations and comply with regulations through
              established procedures and guidelines.
            </p>
            <h3 className="text-xl font-bold pt-3">
              + Highly Professional Staff
            </h3>
            <p className="pb-3 text-justify">
              Highly professional staff are skilled, experienced, and committed
              individuals who provide exceptional service to customers or
              clients.
            </p>
            <a href="https://mosheur-online-doctors-server-side.onrender.com/appointment">
              <PrimaryButton>Get Started</PrimaryButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
