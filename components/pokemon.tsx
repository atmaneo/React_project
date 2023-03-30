import face from './public/face.png';
import dos from './public/dos.png';
import { useState } from 'react';

type pokemonProps = {
id:number
}

export const Pokemon = ({id} :pokemonProps)=> {
  const face = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  const dos = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    const [image, setImage] = useState(face);
    
    function handleClick() {
        if (image===face) {
            setImage(dos)
        }
        else {
            setImage(face);
        }
     
    }
    return (
      <div className='bg-gray-500 w-24 rounded-md'>
        <img src={image} alt="image"/>
        <button onClick={handleClick}>Retourner l'image</button>
      </div>
      
    );
  }
  
//   export default ImageChanger;
