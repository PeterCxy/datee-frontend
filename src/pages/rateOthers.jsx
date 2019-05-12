import React, { Component } from 'react';
import axios from 'axios'
import ShowPhoto from '../components/ShowPhoto';
import { arrayExpression } from '@babel/types';

export default class rateOthers extends Component {
    constructor(props){
        super(props);
        this.state={
            rUid:'',
            rUph:[],
            score:''
        }
    }

    componentDidMount(){
        this.getRandom()
    }

    getRandom = () => {
        let users = JSON.parse(localStorage.getItem('users'))
        let randomUser = users[Math.floor(Math.random()*users.length)]
        console.log(randomUser)
        axios.get('http://localhost:23456/photos/list/'+randomUser,{
            headers: {
                'authorization': 'Bearer '+localStorage.getItem("access_token")
            }
            }).then(({ data }) => {
                if(data){
                    this.setState({
                        rUph : data.result,
                    })
                }
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
          window.alert('Thanks for your rating!')
          this.props.history.push('/whoami')
    }

    render() {
    return (
        <div>
            <div className="profile_banner">
            <div className="container"> 
                <h3>We randomly choose a user for you to rate</h3>
            </div>
            </div>

            {this.state.rUph.map((id)=>{
                return (
                    <ShowPhoto uid={id} />
                )
            })}
            
            <div class="clear-fix"></div>

            <form onSubmit={ this.onSubmit } style={{clear:'both'}}>

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
