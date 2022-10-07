import { useContext } from "react";
import Contexto from "../context/Contexto";
import Galeria from "../components/Galeria"


export default function Favoritos() {

  const {likedFotos} = useContext(Contexto)



  return (
    <>
     
      <div >
        < Galeria fotos ={likedFotos} />
      </div>
      
      
    </>
  );
}