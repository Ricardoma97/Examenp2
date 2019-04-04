import React, { Component } from 'react';
import './App.css';

class Tweet extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_name: null,
      description: null,
      id:null
    }
    this.killTweet=this.killTweet.bind(this);
  }
  killTweet(e){
    e.preventDefault();
    var auxUser=this.props.obj.user_name;
    var auxvalue=this.props.obj.description;
    var idaux=this.props.obj.id;
    console.log(idaux,auxUser,auxvalue);
    fetch("https://still-garden-88285.herokuapp.com/draft_tweets/"+idaux, {
              method: "DELETE",
               headers:{
                 'Content-Type': 'application/json'
                }
              })
            .then(function(data) {
          console.log("Request succeeded with  response", data);
           })
       .catch(function(error) {
           console.log("Request failed", error);
         });
  }
  render() {
    const { user_name, avatar, description, created_at } = this.props.obj;
    
    return(
      <li className="tweet row">
        <div>
          <img
            alt={user_name + "'s avatar"}
            className="small-avatar"
            src={avatar}
          />
        </div>
        <div className="column tweet-content">
          <div className="row">
            <p className="user-name">{user_name}</p>
            <span className="timestamp">{created_at}</span>
          </div>
          <div className="tweet-info">{description}</div>
        </div>
        <form onSubmit={this.killTweet}>
        <button>kill</button>
        </form>
      </li>
    )
  }
}

export default Tweet;
