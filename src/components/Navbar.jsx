import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import navLogo from "../assets/nav-logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <img className="w-8 h-8" src={navLogo} alt="" />
      </div>
      <div className="flex-1 space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/career"}>Career</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-8 h-8 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        <div>
          {user && user?.email ? (
            <Link onClick={logOut} className="btn btn-neutral rounded-none">
              Log Out
            </Link>
          ) : (
            <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
