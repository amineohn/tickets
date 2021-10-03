import React, { useState, useEffect } from "react";
const Index = () => {
  const [Users, setUsers] = useState({
    users: null,
  });
  useEffect(() => {
    fetch(`https://api.github.com/users/amineohn`)
      .then((res) => res.json())
      .then((users) => {
        setUsers({ users: users.avatar_url });
      });
  }, [setUsers]);
  const { users }: any = Users;
  return (
    <>
      <div>
        <div className="relative h-64	flex justify-center align-center md:mb-16 mb-0">
          <img
            src={`./images/banner.gif`}
            className="bg-center rounded-2xl absolute"
            alt=""
          />
          <img
            src={users}
            className="bg-center mt-20 md:mt-36 md:w-40 w-28 md:h-40 h-28 mb-1 mr-4 md:mr-2 transition transform rounded-full hover:scale-150 absolute"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
