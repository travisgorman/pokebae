import React from 'react';
import { hashHistory } from 'react-router';
// import store from '../store';

export default React.createClass({
  getInitialState: function(){
    return {};
  },
  updateState: function () {
    this.setState(session.toJSON());
  },
  componentDidMount: function () {
    session.on('change', this.updateState);
  },
  componentWillUnmount: function () {
    session.off('change', this.updateState);
  },
  submitHandler: function(e) {
    e.preventDefault();
    var data = Object.keys(this.refs)
      .reduce( (a, b) => { a[b] = this.refs[b].value;
        return a;
      }, {})
      session.signup(data);
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    if (nextState.authtoken){
      hashHistory.push('/welcome');
      return false;
    } else {
      return true;
    }
  },
  render: function () {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          ref="username"
          type="text"
          placeholder="username" />
        <input
          ref="password"
          type="password"
          placeholder="password" />
        <input
          ref="verifyPassword"
          type="password"
          placeholder="verify password" />
        <input
          type="submit"
          value="submit" />
      </form>
    )
  }
})
