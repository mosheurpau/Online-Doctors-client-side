import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <selection>
      <div
        style={{
          background: `url(${appointment})`,
        }}
        className="text-center"
      >
        <div>
          <h5 className="text-secondary font-bold text-xl text-bold pt-10">
            Contact Us
          </h5>
          <h2 className="text-3xl text-white">Stay connected with us</h2>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="input w-full max-w-xs my-5"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-xs mb-5"
          />
          <br />
          <textarea
            className="textarea  w-full max-w-xs"
            placeholder="Your Message"
          ></textarea>{" "}
          <br />
          <input
            type="submit"
            value="Submit"
            className="text-white font-bold py-2 px-5 rounded mt-5 mb-10 normal-case bg-gradient-to-r from-secondary to-primary w-full max-w-xs"
          />
        </div>
      </div>
    </selection>
  );
};

export default Contact;
