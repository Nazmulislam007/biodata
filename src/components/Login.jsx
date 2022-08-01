import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { useChecks } from "../context/ChecksContext";

const Login = () => {
  const { dispatch } = useChecks();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
        Login Form
      </h1>
      <div className="bg-slate-100 mx-auto pt-5 max-w-sm p-2">
        <InputField
          onChange={handleChange}
          type="email"
          placeholder="Enter Your Email"
          value={inputValue.email}
        />
        <InputField
          onChange={handleChange}
          placeholder="Enter Your Password"
          type="password"
          value={inputValue.password}
          className="mt-2"
        />
      </div>
      <div className="grid mt-3 place-items-center">
        <Link
          to="/form"
          onClick={(e) => {
            dispatch({ type: "login", payload: false });
          }}
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Login;
