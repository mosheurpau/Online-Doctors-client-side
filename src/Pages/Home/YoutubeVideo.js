import React from "react";
import Iframe from "react-iframe";

const YoutubeVideo = () => {
  return (
    <section className="bg-secondary text-center mt-5">
      <h2 className="text-4xl text-white font-bold pt-10">
        Health Tips & Resources
      </h2>
      <div className="hero min-h-screen bg-secondary">
        <div className="hero-content text-center">
          <Iframe
            url="https://www.youtube.com/embed/Rg-Ztj5sk-E"
            position="absolute"
            width="80%"
            height="550px"
            styles={{ height: "w-full" }}
          />
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideo;
