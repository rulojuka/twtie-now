const URLServidor = 'http://localhost:3001'

export const TweetService = {
  busca() {
    const token = localStorage.getItem('TOKEN')
    const URL = `${URLServidor}/tweets?X-AUTH-TOKEN=${token}`
    return fetch(URL)
      .then(response => response.json())
  },

  adiciona(conteudo) {
    const token = localStorage.getItem('TOKEN')
    const URL = `${URLServidor}/tweets?X-AUTH-TOKEN=${token}`
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