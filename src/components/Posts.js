import React, { Component } from 'react';

class Posts extends Component {
  componentWillMount() {
    console.log(123);
  }
  render() {
    return (
      <div>
        <h1>Post</h1>
      </div>
    );
  }
}

export default Posts;