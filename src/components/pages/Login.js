import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import { useChecks } from "../../context/ChecksContext";
import Button from "../Button";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useChecks();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "login", payload: false });
    navigate("/form", { replace: true });
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
          name="email"
          placeholder="Enter Your Email"
          value={inputValue.email}
        />
        <InputField
          onChange={handleChange}
          placeholder="Enter Your Password"
          type="password"
          name="password"
          value={inputValue.password}
          className="mt-2"
        />
      </div>
      <div className="grid mt-3 place-items-center">
        <Button title="Login" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Login;
