import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";
import Contexto from "./context/Contexto";

export default function App() {
  const [fotos, setFotos] = useState([]);

  const onLike = (id) => {
    const resultsLike = fotos.map((foto) => {
      return foto.id === Number(id)
        ? { ...foto, liked: !foto.liked }
        : { ...foto };
    });
    setFotos(resultsLike);
  };

  const likedPhotos = fotos.filter((elem) => {
    return elem.liked === true;
  });

  const endpoint = "/fotos.json";
  const mostrarData = async () => {
    const response = await fetch("http://localhost:3000/" + endpoint);
    const data = await response.json();

    setFotos(data.photos);
    // console.log(data.photos);
  };
  useEffect(() => {
    mostrarData();
  }, []);

  return (
    <Contexto.Provider value={{ fotos, onLike, likedPhotos }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Contexto.Provider>
  );
}
