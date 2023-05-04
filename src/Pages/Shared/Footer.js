import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const Footer = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#21201C", "#2C2B29", "#19D3AE", "#3A4256", "#3d4451"];

  const springProps = useSpring({
    backgroundColor: colors[colorIndex],
    padding: "20px",
    textAlign: "center",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [colorIndex, colors.length]);

  return (
    <animated.footer style={springProps}>
      <div className="footer px-12 text-white">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="my-10 text-center text-white">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </animated.footer>
  );
};

export default Footer;
