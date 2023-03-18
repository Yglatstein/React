import React, { useState, FC } from "react";
import {useCounter} from "../../hooks/useCounter"


interface DogsProps {
    src: string;
}


const Image: FC<DogsProps> = ({ src }) => {
    const [count, increment ] = useCounter(0);
    console.log(count)
    function returnCount(){
      if(count) return count
      else return 0
    }

    return (
    <div>
      <img src={src} alt="" />
      <br></br>
      <button onClick={() => increment}>Like</button>
      <h6>{}</h6>
    </div>
  );
};

export default Image;