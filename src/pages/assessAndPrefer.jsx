import React, { Component } from 'react';
import axios from 'axios';

// function setOption(){
//     var option=[];
//     for(var i=18;i<41;i++){
//         option.push(<option value={i+""}>i</option>)
//     }
//     return option;
// }

class assessAndPrefer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender:'',
      maxAge:'',
      minAge:''
    }
}

// onChange = (e) => {
//     console.log('Wow'+e.name);
//     this.setState({ [e.name]: e.value });
// }

genderOnChange = (e) => {
  this.setState({
    gender:e.target.value
  });
}

maxAgeOnChange = (e) => {
  this.setState({
    maxAge:e.target.value
  })
}

minAgeOnChange = (e) => {
  this.setState({
    minAge:e.target.value
  })
}

onSubmit = (e) => {
    e.preventDefault();
    var fd=new FormData();
    fd.append('gender',this.state.gender);
    fd.append('maxAge',this.state.maxAge);
    fd.append('minAge',this.state.minAge);
    axios.put('http://localhost:23456/user/matching_pref', fd,{
      headers: {
        'Content-Type': 'form-data',
        'Authorization': 'Bearer '+localStorage.getItem("access_token")
      }
    }).then(({ data }) => {
      console.log(data);
    })
  }

render() {
  return (
    <div>
    <div className="profile_banner">
    <div className="container"> 
        <h3>Select your machingPreference</h3>
    </div>
    </div>
    <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">
    <form onSubmit={ this.onSubmit }>

    <div className="form-group">
      <label className="control-label">Gender</label>
      <select value={this.state.gender} onChange={this.genderOnChange} className="form-control">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    <div className="form-group">
      <label className="control-label">maxAge</label>
      <select value={this.state.maxAge} onChange={this.maxAgeOnChange} className="form-control">
        <option id="18" value="18">18</option>
        <option id="19" value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
      </select>
    </div>

    <div className="form-group">
      <label className="control-label">minAge</label>
      <select value={this.state.minAge} onChange={this.minAgeOnChange} className="form-control">
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
      </select>
    </div>

    <div className="form-group">
      <button className="btn btn-primary btn-lg">
        Confirm
      </button>
    </div>
  </form>
  </div>
  <div className="col-md=3"></div>
  </div>
  </div>
);
}
}

export default assessAndPrefer;