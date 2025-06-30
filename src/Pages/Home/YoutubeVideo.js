import React from "react";
import Iframe from "react-iframe";

const YoutubeVideo = () => {
  return (
    <section className=" text-center mt-5 ">
      <h2 className="text-4xl text-secondary font-bold py-10">
        Health Tips & Resources
      </h2>
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        {/* Set aspect ratio of 16:9 */}
        <div className="absolute inset-0">
          <Iframe
            url="https://www.youtube.com/embed/Rg-Ztj5sk-E"
            width="100%"
            height="100%"
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideo;
