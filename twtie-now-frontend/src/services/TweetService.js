const URLServidor = 'http://localhost:3001'

export const TweetService = {
  busca() {
    const URL = `${URLServidor}/tweets`
    return fetch(URL)
      .then(response => response.json())
  }
}