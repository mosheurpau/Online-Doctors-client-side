import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "",
      img: whitening,
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
            <h1 className="text-2xl lg:text-5xl  font-bold">
              Box Office News!
            </h1>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
