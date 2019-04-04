import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';

function EmptyState(props) {
  return (
    <div className="dummy-tweet row">
      Loading...
    </div>
  )
}

class Feed extends Component {
  rld(e){
    if (this.state.lol===0)
      this.setState({lol:1});
    else
      this.setState({lol:0});
}
  constructor(props){
    super(props);
    this.state = {
      lol:1
    }
    this.rld=this.rld.bind(this);
  }
  render() {
    return(
      <ul className="feed">
        {/* CONDITIONAL RENDERING */}
        {!this.props.isLoaded && <EmptyState />}

        {
          this.props.tweets.map((tweet) => (
            <Tweet 
              key={tweet.id}
              obj={tweet}
              function={this.rld}
              // user={tweet.user_name}
              // userPic={tweet.avatar}
              // content={tweet.description}
              // createdAt={tweet.created_at}
            />
          ))
        }
      </ul>
    )
  }
}

export default Feed;
