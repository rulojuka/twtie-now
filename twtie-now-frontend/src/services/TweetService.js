const URLServidor = 'http://localhost:3001'

export const TweetService = {
  busca() {
    const URL = `${URLServidor}/tweets`
    return fetch(URL)
      .then(response => response.json())
  },

  adiciona(conteudo) {
    const URL = `${URLServidor}/tweets`
    const request = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ conteudo })
    }
    return fetch(URL, request)
      .then((respostaDoServer) => {
        return respostaDoServer.json()
      })
  }
}