import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coverImg from "../assets/images/cover.png";
import { useAuth } from "../providers/authProvider";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    shareData: false,
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    shareData: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSignUp = (e) => {
    e.preventDefault();
    const errors = {};

    if (!data.name) {
      errors.name = "Please fill in the name!";
    }
    if (!data.username) {
      errors.username = "Please fill in the username!";
    }
    if (!data.email) {
      errors.email = "Please fill in the email!";
    }
    if (!data.mobile) {
      errors.mobile = "Please fill in the mobile number!";
    }
    if (data.mobile.length !== 10) {
      errors.mobile = "Please write accurate mobile number!";
    }
    if (!data.shareData) {
      errors.shareData = "Please check this to proceed!";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      register(data);
      navigate("/genre");
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div className="relative h-screen w-full">
        <img src={coverImg} alt="cover" className="relative w-full h-screen" />
        <div className="absolute bottom-20 left-10 text-white text-5xl font-semibold space-y-2">
          <p>Discover new things on</p>
          <h1>Superapp</h1>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 px-20 py-6 justify-center items-center bg-black">
        <div className="space-y-4">
          <h1 className="text-[color:var(--green-text)] text-3xl font-medium text-center">
            Super app
          </h1>
          <p className="text-white text-center">Create your new account</p>
        </div>

        <form className="flex flex-col gap-y-5 w-96" onSubmit={onSignUp}>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="bg-[color:var(--input-back)] px-3 py-2 text-white w-full"
              name="name"
              onChange={handleChange}
              // required
              value={data.name}
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="UserName"
              className="bg-[color:var(--input-back)] px-3 py-2 text-white w-full"
              name="username"
              onChange={handleChange}
              // required
              value={data.username}
            />
            {error.username && <p className="text-red-500">{error.username}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="bg-[color:var(--input-back)] px-3 py-2 text-white w-full"
              name="email"
              onChange={handleChange}
              // required
              value={data.email}
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>

          <div>
            <input
              type="number"
              placeholder="Mobile"
              className="bg-[color:var(--input-back)] px-3 py-2 text-white w-full"
              name="mobile"
              onChange={handleChange}
              // required
              value={data.mobile}
            />
            {error.mobile && <p className="text-red-500">{error.mobile}</p>}
          </div>

          <div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                // required
                className="bg-[color:var(--input-back)] px-3 py-2 "
                onChange={(e) =>
                  setData({
                    ...data,
                    shareData: !data.shareData,
                  })
                }
                checked={data.shareData}
              />
              <p className="text-gray-500">
                Share my registration data with Superapp
              </p>
            </div>
            {error.shareData && (
              <p className="text-red-500">{error.shareData}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white rounded-full py-2 text-lg bg-green-500 hover:bg-green-500/90"
          >
            SIGN UP
          </button>
        </form>

        <div className="text-gray-500 w-96 text-sm">
          <p>
            By clicking on Sign up. you agree to Superapp
            <span className="text-[color:var(--green-text)]">
              &nbsp; Terms and Conditions of Use
            </span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <span className="text-[color:var(--green-text)]">
              &nbsp; Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
