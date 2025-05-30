import ZeldaGames from "../ZeldaGames/ZeldaGames";
import { MapaGames } from "../MapaGames/MapaGames";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./pagestyle.css";

const PageStyle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <header className="page-header">
        <div>
          <motion.img
            srcSet="./src/images/pngegg.png"
            alt="Triforce"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="logo"
          />
        </div>
        <motion.nav
          className="page-header-menu"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Publishers</a>
          </li>
          <ThemeToggler />
        </motion.nav>
      </header>
      <motion.main
        className="page-main loader"
        id="page-main"
      >
        <div className="sombra-interna">
          <img
            srcSet="./src/images/904361-3840x2160-desktop-4k-legend-of-zelda-breath-of-the-wild-background-image.jpg"
            alt="background"
            className="page-main-background"
          />
        </div>
        <div className="page-main-content">
          <h3>The legend of Zelda</h3>
          <p>The legend of zelda é uma franquia de games de grande sucesso</p>
          <button className="page-main-button">
            <a href="#games">See more</a>
          </button>
        </div>
      </motion.main>

      <motion.section
        className="page-games-section"
        id="games"
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Games</h2>
        <div className="page-games-section-games">
          <ZeldaGames />
        </div>
      </motion.section> 
      <MapaGames/>
      <motion.footer className="page-footer"
      animate={{
        background: [
          "linear-gradient(135deg,rgb(235, 237, 237),rgb(53, 73, 64))",
          "linear-gradient(135deg,rgb(191, 208, 215),rgb(105, 195, 195))",
          "linear-gradient(135deg,rgb(63, 166, 144),rgb(66, 203, 137))"
        ]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <div className="page-footer-content">
          <p>Copyright © 2025 Zelda Games</p>
        </div>
      </motion.footer>
    </>
  );
};

export default PageStyle;
