import React, { Component } from "react";
import User from "./User";
import "bulma/css/bulma.css"

export default class App extends Component {
  state = { user: null };

  async componentDidMount() {
    const response = await fetch("https://randomuser.me/api/");
    const {results} = await response.json();
    this.setState({ user: results });
  }

  render() {
    return <User user={this.state.user} />;
  }
}
