import React from "react";
import appImg from "../../assets/images/app_img.svg";
import appleApp from "../../assets/images/apple_app.png";
import googleApp from "../../assets/images/google_play_app.png";
const MobileApp = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-secondary to-primary mb-16 rounded-2xl">
      <div className="flex-1 hidden lg:block">
        <img src={appImg} alt="" />
      </div>
      <div className="flex-1 p-5">
        <h3 className="text-xl font-bold mb-5">APPLICATION</h3>
        <h2 className="text-3xl text-white mb-5 font-bold">
          Download Online Doctor App Now!
        </h2>
        <p className="text-white mb-5">
          Tota omittantur necessitatibus mei ei. Quo paulo perfecto eu, errem
          percipit ponderum no eos. Has eu mazim sensibus. Ad nonumes
          dissentiunt qui, ei menandri electram eos. Nam iisque consequuntur cu.
        </p>
        <div></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <div>
              <a href="">
                <img src={appleApp} alt="" />
              </a>
            </div>
          </div>
          <div>
            <a href="">
              <img src={googleApp} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
