import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { playAudio } from "./playaudio";
import dados from "../../../games.json";
import "./mapagames.css";

export const MapaGames = () => {
  const [index, setIndex] = useState(0);
  const [titleMapIndex, setTitleMapIndex] = useState(0);

  const mapas = [
    "./src/images/mapas-zelda/mapa1.png",
    "./src/images/mapas-zelda/mapa2.png",
    "./src/images/mapas-zelda/mapa3.png",
    "./src/images/mapas-zelda/mapa4.png",
    "./src/images/mapas-zelda/mapa5.png",
    "./src/images/mapas-zelda/mapa6.png",
    "./src/images/mapas-zelda/mapa7.png",
    "./src/images/mapas-zelda/mapa8.png",
    "./src/images/mapas-zelda/mapa9.png",
    "./src/images/mapas-zelda/mapa10.png",
  ];

  function nextTitleMap() {
    if (titleMapIndex < dados.jogos.length - 1) {
      setTitleMapIndex(titleMapIndex + 1);
    }
  }

  function prevTitleMap() {
    if (titleMapIndex > 0) {
      setTitleMapIndex(titleMapIndex - 1);
    }
  }

  function nextMapImage() {
    if (index < mapas.length - 1) {
      setIndex(index + 1);
    }
  }

  function prevMapImage() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const fadeVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <motion.div className="title-maps">
        <h2 className="titulo-mapas">Mapas</h2>
      </motion.div>
      <motion.section className="secao-mapa">
        <div className="container-mapas">
          <button
            className="button-scroll button-left"
            id="button-left"
            onClick={() => {
              prevMapImage();
              playAudio(
                "./src/assets/audios/zelda-rupee-sound-effect-free-sound-effect_7ZlZeu8.mp3"
              );
            }}
            onClickCapture={prevTitleMap}
          >
            <img
              srcSet="./src/images/arrow-big-right.svg"
              alt="seta-esquerda"
              className="seta-esquerda"
            />
          </button>
          <div className="mapas">
            <h2 className="titulo-mapa">{dados.jogos[titleMapIndex].nome}</h2>
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                srcSet={mapas[index]}
                alt={`mapa${index + 1}`}
                className="image-maps"
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
          <button
            className="button-scroll button-right"
            id="button-right"
            onClick={() => {
              nextMapImage();
              playAudio(
                "./src/assets/audios/zelda-rupee-sound-effect-free-sound-effect_7ZlZeu8.mp3"
              );
            }}
            onClickCapture={nextTitleMap}
          >
            <img
              srcSet="./src/images/arrow-big-right.svg"
              alt="seta"
              className="seta-direita"
            />
          </button>
        </div>
      </motion.section>
    </>
  );
};
