import { Component } from "react"
import { TweetService } from "../../services/TweetService"
import Tweet from "../Tweet"

class TweetsContainer extends Component {

  constructor() {
    super()
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    TweetService.busca().then(tweets => this.setState({tweets}))
  }

  renderTweets = (tweets) => {
    if (tweets.length > 0) {
      return tweets.map((tweetInfo) => {
        return <Tweet
          texto={tweetInfo.conteudo}
          key={tweetInfo._id}
          usuario={tweetInfo.usuario}
          likeado={tweetInfo.likeado}
          totalLikes={tweetInfo.totalLikes}
        />
      })
    }
    else {
      return <h3>Crie um novo tweet!</h3>
    }
  }

  render() {
    return (
      <div className="tweetsArea">
        {this.renderTweets(this.state.tweets)}
      </div>
    );
  }
}

export default TweetsContainer;