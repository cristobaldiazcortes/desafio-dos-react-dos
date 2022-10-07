import "../assets/css/galeria.css";
import Heart from "./Heart";
import Contexto from "../context/Contexto";
import { useContext } from "react";


export default function Home() {
  const {fotos, onLike} = useContext(Contexto);
 

  
  return (
    <>
      <div className="galeria grid-columns-5 p-3">
        {fotos.map((foto) => (
           <div className="foto" key={foto.id} onClick={() => onLike(foto.id)} style={{ backgroundImage: `url(${foto.src.tiny})` }}>
            <Heart filled={foto.liked} />
            <p>{foto.alt}</p>
          </div>
        ))}
      </div>
    </>
  );
}
   


