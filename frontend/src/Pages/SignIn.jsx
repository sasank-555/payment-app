import React, { useState } from "react";
import { Input, button } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [isVis, setIsVis] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      formData
    );
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="flex bg-slate-200 w-full h-[100vh] justify-center items-center">
      <div className="flex flex-col items-center  rounded-3xl gap-4 bg-white px-64 py-14 ">
        <h1 className="font-bold text-4xl mb-3">SignIn</h1>
        <Input
          type="email"
          name="username"
          label="Email"
          className="max-w-xs"
          variant="faded"
          description="We'll never share your email with anyone else."
          placeholder="Enter Your Email"
          value={formData.username}
          onChange={(e) => changeHandler(e)}
        />
        <Input
          type={isVis ? "text" : "password"}
          label="Password"
          className="max-w-xs"
          name="password"
          variant="faded"
          placeholder="Enter Your Password"
          description="Enter Password"
          value={formData.password}
          onChange={(e) => changeHandler(e)}
          endContent={
            isVis ? (
              <FaEye
                onClick={() => setIsVis(!isVis)}
                className="text-2xl text-default-400 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setIsVis(!isVis)}
                className="text-2xl text-default-400 cursor-pointer"
              />
            )
          }
        />
        <Button
          color="primary"
          variant="shadow"
          fullWidth="true"
          onClick={submitHandler}
        >
          SignIn
        </Button>
        <p className="text-sm">
          New User?{" "}
          <Link to="/signup" className="underline">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
