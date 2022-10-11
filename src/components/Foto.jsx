import React from "react";
import Heart from "./Heart";
import { useContext } from "react";
import Contexto from "../context/Contexto";

function Foto({ foto }) {

  const { onLike } = useContext(Contexto);

  return (
    <div
      className="foto"
      style={{ backgroundImage: `url(${foto.src.tiny})` }}
      onClick={() => onLike(foto.id)}
    >
      <Heart filled={foto.liked}></Heart>
      {<p>{foto.alt}</p>}
    </div>
  );
}

export default Foto;