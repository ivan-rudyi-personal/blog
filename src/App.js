import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h1>My Awesome Blog</h1>
        <hr/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
