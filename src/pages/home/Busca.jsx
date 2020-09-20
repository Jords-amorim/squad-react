import React from "react";

class Busca extends React.Component {
  limparHashtag() {}


  render() {
    return (
      <div className="hero-image">
        <div className="hero-image-drop"></div>
        <div className="hero-text">
          <h1>
            Encontre hashtags
            <br /> de maneira fácil.
          </h1>
          <p>
            Digite o que deseja no campo de buscas e <br />
            confira os resultados do Twitter abaixo
          </p>
        </div>
        <div className="hero-busca">
          <input
            type="text"
            id="txt-busca"
            ref="input"
            onFocus={this.limparHashtag}
            className="input"
            placeholder="Buscar..."
            onKeyDown={this.props.loadInputFunc}
          />
          <div className="message"></div>
        </div>
      </div>
    );
  }
}

export default Busca;
