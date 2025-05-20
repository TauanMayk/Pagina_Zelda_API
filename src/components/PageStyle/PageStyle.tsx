import ZeldaGames from "../ZeldaGames/ZeldaGames";
import ThemeToggler from "../ThemeToggler/ThemeToggler"
import "./pagestyle.css";

const PageStyle = () => {
  return (
    <>
      <header className="page-header">
        <div>
          <img srcSet="./src/images/pngegg.png" alt="logo" className="logo" />
        </div>
        <ul className="page-header-menu">
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
        <ThemeToggler/>
        </ul>
      </header>
      <main className="page-main " id="page-main">
        <div className="sombra-interna">
          <img
            srcSet="./src/images/the-legend-of-zelda-landscape-sword-5qvpc6rnsmwsdqbd.jpg"
            alt="background"
            className="page-main-background"
          />
        </div>
        <div className="page-main-content">
          <h3>The legend of Zelda</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <button className="page-main-button">
            <a href="#games">See more</a>
          </button>
        </div>
      </main>
      <section className="page-games-section" id="games">
        <h2>Games</h2>
        <div className="page-games-section-games">
          <ZeldaGames />
        </div>
      </section>
      <footer className="page-footer">
        <div className="page-footer-content">
          <p>Copyright © 2025 Zelda Games</p>
        </div>
      </footer>
    </>
  );
};

export default PageStyle;
