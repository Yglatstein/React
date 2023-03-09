import React, { useState, FC } from "react";


interface DogsProps {
    src: string;
}


const Card: FC<DogsProps> = ({ src }) => {

    return (
    <div>
      <img src={src} alt="" />
    </div>
  );
};

export default Card;