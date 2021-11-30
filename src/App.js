import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
        </form>

        <div id="userCard">
          <img src="https://avatars.githubusercontent.com/u/64448617?v=4" />
          <a target="_blank" href="https://github.com/nyamekyeannor">
            <h3>Nyamekye Annor</h3>
          </a>
          <p>(NyamekyeAnnor)</p>
          <p>Total Repos: 33</p>
          <p>Total Followers: 11</p>
        </div>

        <div id="followers"></div>
        <div className="follower">
          <img
            width="200px"
            src="https://avatars.githubusercontent.com/u/7147375?v=4"
          />
          <a target="_blank" href="https://github.com/JorgeVV">
            <p>JorgeVV</p>
          </a>
        </div>
        <div className="follower">
          <img
            width="200px"
            src="https://avatars.githubusercontent.com/u/7147375?v=4"
          />
          <a target="_blank" href="https://github.com/JorgeVV">
            <p>JorgeVV</p>
          </a>
        </div>
        <div className="follower">
          <img
            width="200px"
            src="https://avatars.githubusercontent.com/u/7147375?v=4"
          />
          <a target="_blank" href="https://github.com/JorgeVV">
            <p>JorgeVV</p>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
