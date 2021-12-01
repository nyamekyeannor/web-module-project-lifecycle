import React from "react";
import axios from "axios";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "nyamekyeannor",
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then((resp) => {
        this.setState({
          ...this.state,
          user: resp.data,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      axios
        .get(`https://api.github.com/users/${this.state.currentUser}/following`)
        .then((resp) => {
          this.setState({
            ...this.state,
            followers: resp.data,
          });
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentUser: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then((resp) => {
        this.setState({
          ...this.state,
          user: resp.data,
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Github Handle" onChange={this.handchange} />
          <button>Search</button>
        </form>

        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
