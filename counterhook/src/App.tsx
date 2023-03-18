import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/image/Image';
import axios from 'axios';

function App() {  
  const [dogImages, setDogImages] = useState<Array<string>>([]);
    
    async function handleUpdateImages(){
      const breed = prompt("enter breed");
      if (!breed) {
        setDogImages([]);
      } else {
        try {
          const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
          const {message} = data;
          console.log("recieved: " , message)
          if(message == "Breed not found (master breed does not exist)"){
            alert("cannot find Breed")
          }
          else{
            setDogImages([message])
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

  return (
    <div>
    <button onClick={handleUpdateImages}>Get New Dogs!</button>
    {dogImages.map((image, index) => {return <Image key={index} src={image}/>})}
  </div>
  );
}

export default App;
