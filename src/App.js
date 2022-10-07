import "./styles.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Contexto from "./context/Contexto";



export default function App() {

  const [fotos, setFotos] = useState([]);
 
  const onLike = (id) => {
    const resultadosLike = fotos.map((foto) => {
      return foto.id === Number(id)
        ? { ...foto, liked: !foto.liked }
        : { ...foto };
    });
    setFotos(resultadosLike);
  };

  const likedFotos = fotos.filter((elem) => {
    return elem.liked === true;
  });



  const endpoint = "/fotos.json";
  const mostrarData = async () => {
    const response = await fetch('http://localhost:3000/' + endpoint);
    const data = await response.json();

    setFotos(data.photos);
   // console.log(data.photos);
  };
  useEffect(() => {
    mostrarData();
  }, []);
  return (
    <div className="App">
      <Contexto.Provider value={{fotos, onLike, likedFotos}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </div>
  );
}
