import React, { useState, useEffect, FC } from "react";
import axios from "axios";

interface DogsProps {
  src: string;
}

const Card = () => {
  const [dogImages, setDogImages] = useState<string>("");

  async function handleUpdateImages() {
    try {
      const { data } = await axios.get(
        `https://dog.ceo/api/breeds/image/random`
      );
      const { message } = data;
      console.log("recieved: ", message);
      setDogImages(message);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleUpdateImages()
    console.log("on mount only");
  }, []);

  return (
    <div>
      <button onClick={handleUpdateImages}>Get New Dogs!</button>
      <img src={dogImages} alt="" />
    </div>
  );
};

export default Card;
