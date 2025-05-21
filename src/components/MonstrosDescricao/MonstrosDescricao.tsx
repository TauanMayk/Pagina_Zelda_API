import dados from "../../../monsters.json";
import "./monstrosdescricao.css";

export const MonstrosDescricao = ({
  fecharLightbox,
}: {
  fecharLightbox: () => void;
}) => {
  return (
    <>
      <div className="descricao-monstros">
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
                <p className="nome-monstro">{monstro.nome}</p>
                <p className="descricao-monstro">{monstro.descricao}</p>
                {/* {monstro.aparicoes.map((aparicao, id) => (
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
                ))} */}
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};
