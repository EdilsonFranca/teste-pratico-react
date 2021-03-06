import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

const Conteudo = props => {
    const linhas = props.people.map((linha, index) => {
        if (index <= 2)
            return (
                <Col md={12} key={index} className="people-item button">
                    <p className="cor-secundaria">{linha.birth_year}</p>
                    <h4 className="cor-primaria">{linha.name}</h4>
                    <p><small className="cor-secundaria">{linha.gender}</small></p>
                    <span >
                        <svg viewBox="0 0 31.49 31.49" width="20px" height="20px" fill="red">
                            <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
                            C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
                            c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                        </svg>
                    </span>
                </Col>
            );
    });

    return (
        <div className="people-list">
            {linhas}
        </div>
    );
}

class People extends Component {

    render() {

        const { people } = this.props;

        return (
            <Col md={12} className="people">
                <Conteudo people={people} />
            </Col>
        );
    }
}

export default People;