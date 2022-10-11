
import { useContext } from "react";
import Galeria from "../components/Galeria";
import Contexto from "../context/Contexto";

export default function Favoritos() {
  const { likedPhotos } = useContext(Contexto);

  return (
    
      <div className="container">
        <Galeria fotos={likedPhotos} />
      </div>
    
  );
}