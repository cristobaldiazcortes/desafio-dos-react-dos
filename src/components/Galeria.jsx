import React from "react";
import Foto from "./Foto";
import "../styles.css"
function Galeria({ fotos }) {
  return (
    
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => (
        <Foto key={`idfoto-${foto.id}`} foto={foto} />
      ))}
    </div>
    
  );
}

export default Galeria;
   


