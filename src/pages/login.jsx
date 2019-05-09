import React, { Component } from 'react'
import axios from 'axios'
import '../css/style.css'
import qs from 'qs'

export default class Login extends Component {
  state = {
    username:'',
    password:'',
  }

  _login = (e) => {
    e.preventDefault();
    const data = {
      client_id:'my_awesome_client',
      client_secret:'my_awesome_secret',
      scope:"default",
      grant_type:"password",
      username: this.state.username,
      password: this.state.password,
    }
    axios.post('http://localhost:23456/auth/token', qs.stringify(data),{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(({ data }) => {
      console.log(data.access_token);
      localStorage.setItem("access_token",data.access_token);
      localStorage.setItem("refresh_token",data.refresh_token);
      localStorage.setItem("token_expiration_date",Date.now()+20*60*1000);
      this.props.history.push('/whoami');      
    })
  }

  _handleUserNameChange = (e) => {
    this.setState({username: e.target.value});
  }

  _handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }


  render() {
    return (
      <div>

      <div className="profile_banner">
        <div className="container"> 
          <h3>Login</h3>
        </div>
      </div>
      <div className='profiles'>
        <div className="container">
          <div className="account_grid">
            <div className="col-md-6 login-left">
              <h3>NEW CUSTOMERS</h3>
              <p>If you do not have an account, you can use the ID number to register a unique account, which will be bound to your ID card.</p>
              <a className="acount-btn" href="register.html">Create an Account</a>
            </div>
            <div className="col-md-6 login-right">
              <h3>REGISTERED CUSTOMERS</h3>
              <p>If you have an account with us, please log in.</p>
              <form id="login_form" onSubmit={this._login}>
                <div>
                  <span>Username<label>*</label></span>
                  <input id="username" type="text" onChange={this._handleUserNameChange} value={this.state.username}/> 
                </div>
                <div>
                  <span>Password<label>*</label></span>
                  <input id="password" type="text" onChange={this._handlePasswordChange} value={this.state.password}/> 
                </div>
                <a className="forgot" href="retrieve_password.html">Forgot Your Password?</a>
                <button className="acount-btn" type="submit">Login</button>
              </form>
            </div>	
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
