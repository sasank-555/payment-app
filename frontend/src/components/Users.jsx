import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    async function apple() {
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/bulk?filter=" + filter
      );
      setUsers(response.data.user);
    }
    apple();
    console.log(users);
  }, [filter]);
  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="search for users"
        startContent={<FaSearch />}
      />
      {users.map((user) => (
        <UserCard user={user} key={user._id} />
      ))}
    </div>
  );
};

export default Users;
