import doctors from "../../assets/images/doctors.png";
import { DayPicker } from "react-day-picker";
import bg from "../../assets/images/bg.png";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={doctors}
          className="min-w-sm lg:max-w-sm rounded-lg shadow-2xl"
          alt="Our doctors"
        />
        <div className="text-cyan-50">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
