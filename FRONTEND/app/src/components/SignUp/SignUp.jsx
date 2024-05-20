import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "" });
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.user && data.user._id) {
        setAlert({
          show: true,
          message: "Registration successful! Click OK to continue.",
        });
        setRegistrationSuccessful(true);
      } else {
        setAlert({ show: true, message: "Registration failed!" });
        setRegistrationSuccessful(false);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setAlert({ show: true, message: "Registration failed!" });
      setRegistrationSuccessful(false);
    }
  };

  const handleAlertButtonClick = () => {
    setAlert({ show: false, message: "" });
    if (registrationSuccessful) {
      navigate("/signin");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {alert.show ? (
        <div
          role="alert"
          className="alert fixed inset-0 flex items-center justify-center"
        >
          <div className="bg-base-100 text-white py-2 px-4 rounded">
            <span>{alert.message}</span>
            <button onClick={handleAlertButtonClick} className="ml-4 btn">
              OK
            </button>
          </div>
        </div>
      ) : (
        <div className="card bg-base-300 mt-3 mb-10 flex-col shrink-0 w-full max-w-md ">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
