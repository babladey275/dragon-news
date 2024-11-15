import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-4">Login With</h2>
      <div className="flex flex-col gap-2 *:w-full">
        <button className="btn">
          <span>
            <FaGoogle />
          </span>
          <span>Login with Google</span>
        </button>
        <button className="btn">
          <span>
            <FaGithub />
          </span>
          <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
