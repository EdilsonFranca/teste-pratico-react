import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

class TituloPrincipal extends Component {

    render() {

        const { films } = this.props;

        return (
            <Col md={8} className="titulo-principal">
                <span className="cor-secundaria">{films.director }</span>
                 <h1 className="cor-primaria">#{films.title }</h1>
                 <p><small className="cor-secundaria">{ films.opening_crawl }</small></p>
            </Col>
        );
    }
}

export default TituloPrincipal;