import Galeria from "../components/Galeria";
import { useContext } from "react";
import Contexto from "../context/Contexto";

export default function Home() {
  const { fotos, onLike } = useContext(Contexto);

  return (
    <>
      <div className="container">
        <Galeria fotos={fotos} onLike={onLike} />
      </div>
    </>
  );
}
