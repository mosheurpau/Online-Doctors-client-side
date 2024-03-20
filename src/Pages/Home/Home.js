import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import DoctorTeam from "./DoctorTeam";
import MobileApp from "./MobileApp";
import YoutubeVideo from "./YoutubeVideo";

const Home = () => {
  return (
    <div className="mx-auto">
      <div className="max-w-7xl mx-auto px-1">
        <Banner></Banner>
        <YoutubeVideo></YoutubeVideo>
        <Info></Info>
        <Services></Services>
        <DoctorTeam></DoctorTeam>

        <MakeAppointment></MakeAppointment>

        <Testimonials></Testimonials>
        <MobileApp></MobileApp>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
