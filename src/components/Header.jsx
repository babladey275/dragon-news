import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-6">
      <div>
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h3 className="text-gray-500">Journalism Without Fear or Favour</h3>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
