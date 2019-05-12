import React, { Component } from 'react';

export default class Guidance extends Component {
    logOutonClick=()=>{
      localStorage.removeItem('access_token')
    }

    render() {
    if(localStorage.getItem('access_token')!=null){
        return (
            <div className="header_right">
            <a href="whoami" className="btn1 btn-1 btn1-1b">My Center</a>
            <a href="login" onClick={this.logOutonClick.bind(this.text)} className="btn1 btn-1 btn1-1b">Log Out</a>
            </div>
        )
    }
    return (
        <div className="header_right">
        <ul className="header_user_info">
          <a className="login" href="login">
            <li className="user_desc"><span className="m_1">Already user ? </span>Login</li>
            <i className="user"> </i> 
            <div className="clearfix"> </div>
          </a>
          <div className="clearfix"> </div>
        </ul>
        <a href="register" className="btn1 btn-1 btn1-1b">Sign Up</a>
        </div>
    );
    }
}
