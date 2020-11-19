import React, { Component } from 'react'
import './cabecalho.css'

class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="/">twtie now</a>
                    </h1>
                    { this.props.children }
                </div>
            </header>
        )
    }
}

export default Cabecalho