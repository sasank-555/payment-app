import React from "react";
import { Avatar, Card, CardHeader, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
const UserCard = (prop) => {
  const navi = useNavigate();
  const user = prop.user;
  return (
    <Card>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600 capitalize">
              {user.firstname + user.lastname}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {user.username}
            </h5>
          </div>
        </div>
        <Button
          color="primary"
          radius="full"
          size="sm"
          variant="ghost"
          onClick={() =>
            navi(
              "/send?id=" +
                user._id +
                "&name=" +
                user.firstname +
                user.lastname +
                "&u=" +
                user.username
            )
          }
        >
          Send Money
        </Button>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
