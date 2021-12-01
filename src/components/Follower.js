import React from "react";
import FollowerList from "./FollowerList";

class Follower extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <div className="follower">
        <img width="200px" src={follower.avatar_url}></img>
        <a target="_blank" href={follower.html_url}>
          <p>{follower.login}</p>
        </a>
      </div>
    );
  }
}

export default Follower;
