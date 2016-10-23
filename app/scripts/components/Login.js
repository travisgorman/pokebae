// dependencies
import React from 'react'
import Backbone from 'backbone'
import { hashHistory, Link } from 'react-router'
// instantiations of model constructors from store object
import session from '../models/session'
// import store from '../store'

export default React.createClass({
  getInitialState: function(){
    return {};
  },
  updateState: function(){
    this.setState(session.toJSON())
  },
  componentDidMount: function(){
    session
      .on('change', this.updateState)
  },
  componentWillUnmount: function () {
    session
      .off('change', this.updateState)
  },
  submitHandler: function (e) {
    e.preventDefault();
    // var data = Object.keys(this.refs)
    //   .reduce((returnSoFar, curr) => {
    //     returnSoFar[curr] = this.refs[curr].value;
    //     return returnSoFar;
    //   }, {})
    console.log( e )
    console.log('event:', e )

    let username = this.refs.username;
    let password = this.refs.password;

    console.log('username:', username)
    console.log('password:', password)

    session.login(username, password);
      // .then(function(response){
      //   console.log(response);
      // });
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    if (nextState.authtoken) {
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
        type="submit"
        value="submit" />
      <Link to="/signup"><span>create an account</span></Link>
      </form>
    )
  }
});
