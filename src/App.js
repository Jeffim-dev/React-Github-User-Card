import React from 'react';
import axios from 'axios';

import User from './User';
import Following from './Following';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: [],
      following: []
    };
  }

  componentDidMount() {
    this.fetchUserCards()
  }

  fetchUserCards = () => {
    axios.get("https://api.github.com/users/jeffim-dev")
         .then(result => {
           console.log(result);
           this.setState({
           user: result.data
           })
         })
         .then(result => {
            axios.get("https://api.github.com/users/jeffim-dev/following")
                  .then(result => {
                    console.log(result);
                    this.setState({
                     following: result.data
                    })
                  })
           })
          .catch(error => {
            console.log("err", error)
          })
  }

  render() {
    return (
      <>
        <User user={this.state.user}/>
        <Following following={this.state.following}/>
      </>
    );
  }
}

export default App;
