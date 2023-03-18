import React, { useEffect, useState } from "react";
import Card from "./../components/card/Card";
import { Link, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";

interface DogsProps {
  src: string;
  breed: string |undefined;
}

const Dog = () => {
  console.log("use params is: ", useParams());
  const [image, setImage] = useState<string>();
  const { breed } = useParams();


  async function getDogImage() {
    const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    setImage(data.message)
  }

  useEffect(() => {
    
    getDogImage()
  }, []);

  return (
    <div className="dog_wrapper">
     {image ? <Card src={image} breed={breed!} /> : null} 
    </div>
  );
};

export default Dog;
