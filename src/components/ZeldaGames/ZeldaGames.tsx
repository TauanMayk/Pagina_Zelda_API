import dados from "../../../games.json";
import "./zeldagames.css";

const ZeldaGames = () => {
  return (
    <>
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
              <li key={game.nome} className="zelda-games-list-item">
                <img src={game.imagem} alt={game.nome} />
                <p className="nome-game">{game.nome}</p>
                <div className="informacoes-games">
                  <p className="developers">{game.desenvolvedor}</p>
                  <p className="publishers">{game.publicador}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default ZeldaGames;
