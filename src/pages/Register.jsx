import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");

    if (name.length < 5) {
      setError({ ...error, name: "Must be more than 5 character long" });
      return;
    }

    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const terms = form.get("terms");
    // console.log({ name, photo, email, password });

    if (!terms) {
      setError({ ...error, terms: "Please accept our terms and condition" });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate("/").catch((error) => {
            setError({ register: error.message });
          });
        });
      })
      .catch((error) => {
        setError({ register: error.message });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your name"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs text-red-600">
              <span>{error.name}</span>
            </label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          <div>
            {error?.register && (
              <label className="label text-xs text-red-600">
                {error.register}
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start">
              <input
                type="checkbox"
                name="terms"
                className="checkbox rounded-md"
              />
              <span className="label-text ml-2">
                Accept{" "}
                <span className="text-gray-600 font-semibold">
                  Terms & Conditions
                </span>
              </span>
            </label>
          </div>
          {error?.terms && (
            <label className="label text-xs text-red-600">{error.terms}</label>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-500">
          Already Have An Account ?{" "}
          <Link to={"/auth/login"} className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
