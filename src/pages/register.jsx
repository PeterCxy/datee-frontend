import React, { Component } from 'react'
import '../css/style.css'
import logoImg from '../images/logo.png'
import axios from 'axios'
import qs from 'qs'
import 'bootstrap/dist/css/bootstrap.css'

export default class register extends Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    nickName:'',
    age:'',
    gender:'',
    country:'',
    city:'',
    password:'',
    confirm:'',
  }
  

  _register = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName:this.state.lastName,
      age:this.state.age,
      gender:this.state.gender,
      country:this.state.country,
      city:this.state.city,
    }
    axios.put('http://localhost:23456/user/register',qs.stringify(data),{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(({ data }) => {
      console.log(data);
      this.props.history.push('/login');
    })

  }

  _handlefirstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  }
  _handlelastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  }
  _handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  _handlenickNameChange = (e) => {
    this.setState({nickName: e.target.value});
  }
  _handleAgeChange = (e) => {
    this.setState({age: e.target.value});
  }
  _handleGenderChange = (e) => {
    this.setState({gender: e.target.value});
  }
  _handleCountryChange = (e) => {
    this.setState({country: e.target.value});
  }
  _handleCityChange = (e) => {
    this.setState({city: e.target.value});
  }
  _handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }
  _handleConfirmChange = (e) => {
    this.setState({confirm: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="profile_banner">
          <div className="container"> 
            <h3>Register</h3>
          </div>
        </div>
        <div className='profiles'>
          <div className="container">
            <div className="register">
              <form> 
                <div className="register-top-grid">
                  <h3>PERSONAL INFORMATION</h3>
                  <div>
                    <span>First Name<label>*</label></span>
                    <input id='firstName' onChange={this._handlefirstNameChange} value={this.state.firstName} type="text"/> 
                  </div>
                  <div>
                    <span>Last Name<label>*</label></span>
                    <input id='lastName' onChange={this._handlelastNameChange} value={this.state.lastName} type="text"/> 
                  </div>
                  <div>
                    <span>Email<label>*</label></span>
                    <input id='email' onChange={this._handleEmailChange} value={this.state.email} type="text"/> 
                  </div>
                  <div>
                    <span>Nick Name<label>*</label></span>
                    <input id='nickName' onChange={this._handlenickNameChange} value={this.state.nickName} type="text"/> 
                  </div>
                  <div>
                    <span>Age<label>*</label></span>
                    <input id='age' onChange={this._handleAgeChange} value={this.state.age} type="text"/> 
                  </div>
                  <div>
                    <span>Gender<label>*</label></span>
                    <input id='gender' onChange={this._handleGenderChange} value={this.state.gender} type="text"/> 
                  </div>
                  <div>
                    <span>Country<label>*</label></span>
                    <input id='country' onChange={this._handleCountryChange} value={this.state.country} type="text"/> 
                  </div>
                  <div>
                    <span>City<label>*</label></span>
                    <input id='city' onChange={this._handleCityChange} value={this.state.city} type="text"/> 
                  </div>
                </div>
                <div className="register-bottom-grid">
                  <h3>LOGIN INFORMATION</h3>
                  <div>
                    <span>Password<label>*</label></span>
                    <input id='password' onChange={this._handlePasswordChange} value={this.state.password} type="text"/>
                  </div>
                  <div>
                    <span>Confirm Password<label>*</label></span>
                    <input id='confirm' onChange={this._handleConfirmChange} value={this.state.confirm} type="text"/>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </form>
              <div className="clearfix"> </div>
              <div className="register-but">
                <a className="acount-btn" href="javascript:void(0)" onClick={this._register}>Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

