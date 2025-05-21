import { MonstrosDescricao } from "../MonstrosDescricao/MonstrosDescricao";
import { motion } from "framer-motion";
import { useState } from "react";
import Fslightbox from "fslightbox-react";
import dados from "../../../games.json";
import "./zeldagames.css";

const ZeldaGames = () => {
  const [islightboxOpen, setIslightboxOpen] = useState(false);

  const abrirLightbox = () => {
    setIslightboxOpen(true);
  };

  const fecharLightbox = () => {
    setIslightboxOpen(false);
  };

  return (
    <>
      <motion.div
        className="animation-motion"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 4 }}
      >
        <div className="zelda-games-section">
          <ul className="zelda-games-list">
            {dados.jogos.map(
              (game: {
                nome: string;
                imagem: string;
                descricao: string;
                desenvolvedor: string;
                publicador: string;
              }) => (
                <motion.div
                  className="animation-motion"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.90 }}
                >
                  <li
                    key={game.nome}
                    className="zelda-games-list-item"
                    onClick={() => {
                      abrirLightbox();
                    }}
                  >
                    <Fslightbox
                      toggler={islightboxOpen}
                      sources={[
                        <MonstrosDescricao fecharLightbox={fecharLightbox} />,
                      ]}
                    />
                    <img src={game.imagem} alt={game.nome} />
                    <p className="nome-game">{game.nome}</p>
                    <div className="informacoes-games">
                      <p className="developers">{game.desenvolvedor}</p>
                      <p className="publishers">{game.publicador}</p>
                    </div>
                  </li>
                </motion.div>
              )
            )}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default ZeldaGames;
