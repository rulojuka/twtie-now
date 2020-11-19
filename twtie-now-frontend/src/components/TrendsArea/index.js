import React, { Component } from 'react'
import './trendsArea.css'

class TrendsArea extends Component {
    render() {
        return (
            <div className="trendsArea">
                <h2 className="trendsArea__titulo widget__titulo">Trending Topics</h2>
                <ol className="trendsArea__lista">
                    <li><a href="/">#twtieNow</a></li>
                    <li><a href="/">#tbt</a></li>
                </ol>
            </div>
        )
    }
}

export default TrendsArea