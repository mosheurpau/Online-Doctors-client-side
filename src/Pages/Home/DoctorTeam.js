import React from "react";
import { MdLocationOn } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import doctorT1 from "./../../assets/images/doctor1.jpg";
import doctor2 from "./../../assets/images/doctor2.jpg";
import doctor3 from "./../../assets/images/doctor3.jpg";
import doctor4 from "./../../assets/images/doctor4.jpg";
import doctor5 from "./../../assets/images/doctor5.jpg";
import doctor6 from "./../../assets/images/doctor6.jpg";

const DoctorTeam = () => {
  const doctors = [
    {
      _id: 1,
      img: doctorT1,
      name: "Mosheur Rahamn",
      specialties: "Cardiologist",
      city: "California",
    },
    {
      _id: 2,
      img: doctor2,
      name: "Dr. Michael Chen",
      specialties: "Neurosurgeon",
      city: "New York",
    },
    {
      _id: 3,
      img: doctor3,
      name: "Dr. Sarah Gupta",
      specialties: "Endocrinologist",
      city: "Texas",
    },
    {
      _id: 4,
      img: doctor4,
      name: "Dr. David Kim",
      specialties: "Gastroenterologist",
      city: "California",
    },
    {
      _id: 5,
      img: doctor5,
      name: "Dr. Emily Patel",
      specialties: "Gynecologist",
      city: "Florida",
    },
    {
      _id: 6,
      img: doctor6,
      name: "Dr. James Park",
      specialties: "Dermatologist",
      city: "Washington",
    },
  ];

  return (
    <div className="pb-28">
      <h2 className="text-center text-xl md:text-4xl font-bold pb-5">
        Our Creative Team
      </h2>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {doctors.map((doctor) => (
            <SwiperSlide>
              <div className="card lg:max-w-lg bg-base-100 shadow-lg mt-8 mb-10">
                <figure className="px-1 pt-1 pb-0 sm:w-auto">
                  <img src={doctor.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="text-center py-5">
                  <h2 className="text-sm sm:text-2xl font-bold">
                    {doctor.name}
                  </h2>
                  <p className="text-sm md:text-xl">{doctor.specialties}</p>
                  <p className="font-bold flex justify-center text-sm md:text-xl">
                    <span className="pt-1 p-1">
                      <MdLocationOn className="text-primary" />
                    </span>
                    <span>{doctor.city}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorTeam;
