import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import Card from "../card/Card";
import Loader from "../loader/Loader"
import "./dogs.scss"


interface DogsProps {
    src: string;
    breed: string;
}


const Dogs = () => {
  const [dogImages, setDogImages] = useState<Array<any>>([]);

  useEffect(() => {
    
    handleUpdateImages()
  }, []);

  async function getBreeds(){
    const {data} = await axios.get(`https://dog.ceo/api/breeds/list/all`);
    const {message} = data;
    return Object.keys(message)
  }

  async function getRandomByBreed(breed: string){
    const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    const {message} = data;
    return message
  }
    
  async function handleUpdateImages(){
      try {
        const SRCS = []
        const breeds = await getBreeds() 
        console.log("breeds: ", breeds)
        //@ts-ignore
        for(let i = 0; i<= breeds.length -1 ; i++){
          console.log(breeds[i])
          let src = await getRandomByBreed(breeds[i])
          SRCS.push([src, breeds[i]]) 
        }
        //console.log("srcs: ", SRCS)
        setDogImages(SRCS)
      } catch (error) {
        console.error(error)
      }
    }

    return (
      <div>
        <div className="dogs">
          {dogImages.length === 0 ? <div className="loader"><Loader type="spokes" color = "#200100" /> </div> : dogImages.map((image, index) => {return <Card key={index} src={image[0]} breed={image[1]}/>})}
          {/* {dogImages.map((image, index) => {return <Card key={index} src={image[0]} breed={image[1]}/>})} */}
        </div>
      </div>
  );
};

export default Dogs;
