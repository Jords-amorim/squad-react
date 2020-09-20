import React from 'react';

export default class ModalImg extends React.Component {
    render() {
        return (
        <div id="janela-modal" className={(this.props.showmodal ? 'janela-modal' : 'esconde-janela-modal')}>
            <span id="btn-fechar" className="fechar-modal" onClick={this.props.closeModalFunc}>X</span>
            <img id="img-modal" className="img-modal" src={this.props.selectedImg} alt="" />
        </div>
        )
    }
}