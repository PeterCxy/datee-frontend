import React, { Component } from 'react'
import rateImg from '../images/rate.png'
import logoImg from '../images/logo.png'
import RightButton from './RightButton'

export default class Header extends Component {
  
  render() {
    return (
      <div className="header">
        <div className='container'>
          <div className="header_left">
            <img src={rateImg} alt=""/>
          </div>
          <div className="logo">
            <a href="index"><img src={logoImg} alt=""/>
              <span>Date</span>
            </a>
          </div>
          <div className="clearfix"> </div>
        </div>
        <RightButton />
      </div>
    );
  }
}
