import React from "react";
import { Slider, Button, Avatar } from "@nextui-org/react";
const Send = () => {
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
              Sasank Nasika
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @sasank
            </h5>
          </div>
        </div>
        <Slider
          label="Choose Amount"
          showTooltip={true}
          formatOptions={{ style: "currency", currency: "USD" }}
          tooltipValueFormatOptions={{ style: "currency", currency: "USD" }}
          defaultValue={40}
          className="max-w-md font-bold"
          maxValue={10000}
        />
        <Button
          color="primary"
          variant="shadow"
          className="max-w-md"
          fullWidth="true"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Send;
