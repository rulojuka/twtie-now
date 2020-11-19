import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import TweetsContainer from './components/TweetsContainer';
import { TweetService } from "./services/TweetService"

class App extends Component {
  constructor(){
    super()
    this.state={
        novoTweet: "",
        tweets: []
    }
    this.atualizaNovoTweet = this.atualizaNovoTweet.bind(this)
    this.adicionaTweet = this.adicionaTweet.bind(this)
  }

  componentDidMount() {
    TweetService.busca().then(tweets => this.setState({tweets}))
  }

  novoTweetEstaValido() {
    return this.state.novoTweet.length
      && this.state.novoTweet.length <= 140
      && this.state.novoTweet.length > 0
  }

  atualizaNovoTweet(evento) {
    this.setState({ "novoTweet": evento.target.value })
  }

  // Essa função só é necessária caso o Critério de aceite 3 da Issue B não tenha sido implementado
  // criaTweetFake(texto){
  //   return {
  //     "usuario": {
  //       "login": "usuario1",
  //       "nome": "Usuario",
  //       "foto": "https://placehold.it/50x50",
  //     },
  //     "conteudo": texto,
  //     "likes": [],
  //     "totalLikes": 0,
  //     "key": "asdfghjkl"
  //   }
  // }

  adicionaTweet(evento) {
    evento.preventDefault()
    if (this.novoTweetEstaValido()) {
      // Essa criação só é necessária caso o Critério de aceite 3 da Issue B não tenha sido implementado
      // const objetoNovoTweet = this.criaTweetFake(this.state.novoTweet)

      TweetService.adiciona(this.state.novoTweet)
        .then((tweetVindoDoServidor) => {
          this.setState({
            tweets: [tweetVindoDoServidor, ...this.state.tweets],
            novoTweet: ""
          })
        })
    }
  }

  render() {
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@usuario" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <form
                      className="novoTweet"
                      onSubmit={ this.adicionaTweet }
                    >
                        <div className="novoTweet__editorArea">
                            <span className={
                              `novoTweet__status
                              ${
                                this.novoTweetEstaValido()
                                ? ''
                                : 'novoTweet__status--invalido'
                              }
                              `
                            }>{ this.state.novoTweet.length }/140</span>
                            <textarea
                              className="novoTweet__editor"
                              placeholder="O que está acontecendo?"
                              value={this.state.novoTweet}
                              onChange={this.atualizaNovoTweet}
                            ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="novoTweet__envia"
                          disabled={ !this.novoTweetEstaValido() }
                        >Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <TweetsContainer tweets={this.state.tweets}/>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
