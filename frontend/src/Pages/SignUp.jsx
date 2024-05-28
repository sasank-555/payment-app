import React, { useState } from "react";
import { Input, button } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
useNavigate;

const SignUp = () => {
  const [isVis, setIsVis] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      formData
    );
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  };
  return (
    <div className="flex bg-slate-200 w-full h-[100vh] justify-center items-center">
      <div className="flex flex-col items-center  rounded-3xl gap-4 bg-white px-64 py-14 ">
        <h1 className="font-bold text-4xl mb-3">SignUp</h1>
        <Input
          type="email"
          name="username"
          value={formData.username}
          label="Email"
          className="max-w-xs"
          variant="faded"
          description="We'll never share your email with anyone else."
          placeholder="Enter Your Email"
          onChange={(e) => changeHandler(e)}
        />
        <Input
          type="text"
          label="FirstName"
          name="firstname"
          value={formData.firstname}
          className="max-w-xs"
          variant="faded"
          placeholder="Sasank"
          onChange={(e) => changeHandler(e)}
        />
        <Input
          type="text"
          label="LastName"
          name="lastname"
          value={formData.lastname}
          className="max-w-xs"
          variant="faded"
          placeholder="Nasika"
          onChange={(e) => changeHandler(e)}
        />
        <Input
          type={isVis ? "text" : "password"}
          label="Password"
          name="password"
          value={formData.password}
          className="max-w-xs"
          variant="faded"
          placeholder="Enter Your Password"
          description="Choose a strong password"
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
          SignUp
        </Button>
        <p className="text-sm">
          Existing User?
          <Link to="/signin" className="underline">
            signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
