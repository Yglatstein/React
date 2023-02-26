import React, { useState } from "react";

const User = () => {
  const [userName, setUserName] = useState<string>("Your Name");
  const [userAge, setUserAge] = useState<number>(0);

  function handlechangeName() {
    const newName = prompt("enter new name");
    if (!newName) {
      setUserName("no name was given");
    } else {
      setUserName(newName);
    }
  }

  function handleChangeAge() {
    const newAge = prompt("enter your birth year");
    if (!newAge || !Number(newAge)) {
        setUserAge(0);
      } else {
        setUserAge(2023 - Number(newAge));
      }
  }

  return (
    <div>
      <div>
        User Name: {userName}
        <button onClick={handlechangeName}>Change Name</button>
      </div>

      <div>
        User Age: {userAge}
        <button onClick={handleChangeAge}>Change Age</button>
      </div>
      
    </div>
  );
};

export default User;