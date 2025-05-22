import { MonstrosDescricao } from "../MonstrosDescricao/MonstrosDescricao";
import { motion } from "framer-motion";
import { useState } from "react";
import Fslightbox from "fslightbox-react";
import dados from "../../../games.json";
import "./zeldagames.css";

const ZeldaGames = () => {
  const [islightboxOpen, setIslightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const abrirLightbox = (index: number) => {
    setLightboxIndex(index);
    setIslightboxOpen(true);
  };

  const fecharLightbox = () => setIslightboxOpen(false);

  return (
    <>
      <motion.div
        className="animation-motion"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 4 }}
      >
        <Fslightbox
          toggler={islightboxOpen}
          sources={[
            <MonstrosDescricao
              fecharLightbox={fecharLightbox}
              game={dados.jogos[lightboxIndex]}
            />,
          ]}
        />
        <div className="zelda-games-section">
          <ul className="zelda-games-list">
            {dados.jogos.map((game, index) => (
              <motion.div
                className="animation-motion"
                key={game.nome}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <li
                  key={game.nome}
                  className="zelda-games-list-item"
                  onClick={() => {
                    setLightboxIndex(index);
                    abrirLightbox(index);
                  }}
                >
                  <img src={game.imagem} alt={game.nome} />
                  <p className="nome-game">{game.nome}</p>
                  <div className="informacoes-games">
                    <p className="developers">{game.desenvolvedor}</p>
                    <p className="publishers">{game.publicador}</p>
                  </div>
                </li>
              </motion.div>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default ZeldaGames;
