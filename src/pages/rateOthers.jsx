import React, { Component } from 'react';
import axios from 'axios'
import ShowPhoto from '../components/ShowPhoto';

export default class rateOthers extends Component {
    constructor(props){
        super(props);
        this.state={
            rUid:'',
            score:''
        }
    }

    getRandom = () => {
        axios.get('http://localhost:23456/user/random',{
            headers: {
              'Authorization': 'Bearer '+localStorage.getItem("access_token"),
            }
          }).then(({ res }) => {
                this.setState({
                    rUid:res
                })
          })
    }

    scoreOnChange = (e) => {
        this.setState({
          score:e.target.value
        })
    }

    onSubmit = () => {
        axios.put('http://localhost:23456/rate/'+this.state.rUid,{
            headers: {
              'Authorization': 'Bearer '+localStorage.getItem("access_token"),
            }
          }).then(({ res }) => {
                console.log(res)
          })
    }

    render() {
    return (
        <div>
            <div className="profile_banner">
            <div className="container"> 
                <h3>We randomly choose a user for you to rate</h3>
            </div>
            </div>
            <getRandom />
            <ShowPhoto id={this.state.rUid} />

            <form onSubmit={ this.onSubmit }>

                <div className="form-group">
                <label className="control-label">Score</label>
                <select value={this.state.score} onChange={this.scoreOnChange} className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>                    
                </select>
                </div>

                <div className="form-group">
                <center>
                <button className="btn btn-primary btn-lg">
                    Confirm
                </button>
                </center>
                </div>
            </form>
            </div>
    );
    }
}
