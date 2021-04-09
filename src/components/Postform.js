import React, { Component } from 'react';

class Postform extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label htmlFor="">Title: </label><br/>
            <input type="text" name="title" value={this.state.title}/>
          </div>
          <div>
            <label htmlFor="">Body: </label><br/>
            <input type="text" name="body" value={this.state.title}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;