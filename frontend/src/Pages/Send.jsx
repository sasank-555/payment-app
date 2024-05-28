import React, { useState } from "react";
import { Slider, Button, Avatar, Input } from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported

const Send = () => {
  const [amount, setAmount] = useState("");

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const email = searchParams.get("u");

  const submitHandler = () => {
    axios
      .post(
        "http://localhost:3000/api/v1/accounts/transfer",
        {
          to: id,
          amount: amount,
        },
        {
          headers: {
            authorization: "bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log("Transfer successful:", response.data);
      })
      .catch((error) => {
        console.error("Transfer error:", error);
      });
  };

  return (
    <div className="flex items-center justify-center bg-slate-200 h-[100vh]">
      <div className="flex flex-col gap-4 bg-white px-24 py-9 items-start rounded-xl w-6/12 shadow-lg">
        <h1 className="font-bold text-3xl text-center">Send Money</h1>
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
            className="align-top mr"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {email}
            </h5>
          </div>
        </div>

        <Input
          type="number"
          placeholder="0.00"
          variant="faded"
          endContent={<span className="font-bold">$</span>}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          color="primary"
          variant="shadow"
          className="max-w-md"
          fullWidth={true} // Corrected the fullWidth prop
          onClick={submitHandler} // Corrected to invoke submitHandler
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Send;
