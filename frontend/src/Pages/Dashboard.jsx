import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import axios from "axios";
import Users from "../components/Users";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchBalance() {
      const response = await axios.get(
        "http://localhost:3000/api/v1/accounts/balance",
        {
          headers: {
            authorization: "bearer " + localStorage.getItem("token"),
          },
        }
      );
      setBalance(response.data.balance);
    }
    fetchBalance();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <p className="hidden sm:block font-bold text-inherit">
              Payment <span className="text-blue-500">App</span>
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-3" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Account
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="primary">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem></NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => {
                  localStorage.setItem("token", "");
                  navigate("/signin");
                }}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="text-2xl my-6 justify-start font-bold text-center">
        {localStorage.getItem("token") === "" ? (
          <span>
            Please
            <Link to="/signin" className="text-blue-500">
              {signin}
            </Link>
            first
          </span>
        ) : (
          <span>
            Your Balance is
            <span className="text-blue-500">{balance.toPrecision(6)}</span>$
          </span>
        )}
      </div>
      <div className="w-10/12 mx-auto gap-5 flex flex-col">
        <div className="font-bold ">Users</div>

        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
