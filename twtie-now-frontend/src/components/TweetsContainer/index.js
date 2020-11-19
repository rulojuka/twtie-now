import { Component } from "react"
import Tweet from "../Tweet"

class TweetsContainer extends Component {
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
        {this.renderTweets(this.props.tweets)}
      </div>
    );
  }
}

export default TweetsContainer;