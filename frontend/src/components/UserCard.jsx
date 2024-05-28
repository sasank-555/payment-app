import React from "react";
import { Avatar, Card, CardHeader, Button } from "@nextui-org/react";
const UserCard = () => {
  return (
    <Card>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
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
        <Button color="primary" radius="full" size="sm" variant="ghost">
          Send Money
        </Button>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
