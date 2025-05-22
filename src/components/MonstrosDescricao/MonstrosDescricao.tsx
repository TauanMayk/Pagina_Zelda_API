import dados from "../../../monsters.json";
import "./monstrosdescricao.css";

export const MonstrosDescricao = ({
  fecharLightbox,
}: {
  fecharLightbox: () => void;
  game: {
    nome: string;
    imagem: string;
    descricao: string;
  };
}) => {
  return (
    <>
      <div className="descricao-monstros ">
        <div className="descricao">
          <div className="botao-fechar-container">
            <button className="botao-fechar" onClick={fecharLightbox}>
              X
            </button>
          </div>
          {dados.monstros.map(
            (monstro: {
              nome: string;
              descricao: string;
              aparicoes: { nome: string; "data-de-lancamento": string }[];
            }) => (
              <>
              <div className="grid grid-cols-2 sm:grid-cols-3">
                <div className="monstro-descricao">
                  <p className="nome-monstro">{monstro.nome}</p>
                  <p className="descricao-monstro">{monstro.descricao}</p>
                </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3">
                <div className="aparicoes-monstro">
                  {monstro.aparicoes.map((aparicao, id) => (
                    <>
                      <span key={id} className="nome-aparicao">
                        {aparicao.nome}
                        {id < monstro.aparicoes.length - 1 ? ", " : ""}
                      </span>
                      <small key={id} className="release-date-aparicao">
                        ({aparicao["data-de-lancamento"]})
                        {id < monstro.aparicoes.length - 1 ? ", " : ""}
                      </small>
                    </>
                  ))}
                </div>
              </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};
