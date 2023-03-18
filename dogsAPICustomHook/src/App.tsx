import React , {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './components/dogs/Dog';
import axios from 'axios';
import useGet from './hooks/useGet'

function App() {  
  const [dogImages, setDogImages] = useState<Array<string>>([]);
    
    async function handleUpdateImages(){
        try {
          console.log("try")
          const {message} = useGet('https://dog.ceo/api/breeds/image/random')
          if (message){
            setDogImages([message])
          }
        } catch (error) {
          console.error(error)
        }
      }

  return (
    <div>
    <button onClick={handleUpdateImages}>Get New Dog!</button>
    {dogImages.map((image, index) => {return <Dog key={index} src={image}/>})}
  </div>
  );
}

export default App;