import React, { FC } from "react";

interface UserProps {
  firstName: string;
  age: number;
}


const Card: FC<UserProps> = ({ firstName }) => {
  return (
    <div>
      <h3>welcome {firstName}!</h3>
    </div>
  );
};

export default Card;