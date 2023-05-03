import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-8">
      <figure className="px-1 pt-1 pb-0">
        <img src={service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center">
        <h2 className="text-2xl font-bold">{service.name}</h2>
        <p className="text-justify">{service.description}</p>
      </div>
    </div>
  );
};

export default Service;
