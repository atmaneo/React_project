import { useState } from 'react';

export default function Tp5 () {

  const [clicked, setClicked] = useState(false);

  const couleur = clicked === true ? "font-bold text-blue-500" : "font-bold text-red-500";

  function handleClick() {
    if (clicked === true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <div>
      <p><button className="bg-green-500" onClick={handleClick}>Bouton</button></p>
      <h1 className={couleur}>Mon h1</h1>
    </div>
  );
 };