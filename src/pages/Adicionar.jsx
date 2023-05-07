import React from "react";
import imgLateral from "../html-css-template/imagens/half-circles-pink-blue.png"
import api from "../api";
import { useNavigate } from "react-router-dom";

function Adicionar() {
  const navigate = useNavigate();
  function cadastrar(e){
    e.preventDefault();
    console.log(e.target.nome.value);

    const novaMusica = {
      nome: e.target.nome.value,
      artista: e.target.artista.value,
      genero: e.target.genero.value,
      ano: e.target.anoLancamento.value,
      imagem: e.target.img.value
    }

    api.post("/",novaMusica)
    .then(() => {
      navigate("musicas")
    })
    .catch((erro) => {alert("Deu erro", erro)})
  }
  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form onSubmit={cadastrar}>
              <label>
                Música: <br />
                <input type="text" name="nome" />
              </label>
              <br />
              <label>
                Artista: <br />
                <input type="text" name="artista"/>
              </label>
              <br />
              <label>
                Genêro: <br />
                <input type="text" name="genero"/>
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input type="text" name="anoLancamento"/>
              </label>
              <br />
              <label>
                {" "}
                Imagem (url): <br />
                <input type="text" name="img"/>
              </label>
              <br />
              <button className="btn" type="submit">Enviar</button>
            </form>
          </div>

          <div className="img-lateral">
            <img src={imgLateral} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar;
