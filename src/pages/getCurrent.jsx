import React, { Component } from 'react';
import axios from 'axios'

export default class getCurrent extends Component {
    constructor(props){
        super(props);
        this.state={
            some_uid:[]
        }
    }

    GetID=()=>{
        axios.get('http://localhost:23456/match/current',{
            headers: {
                'authorization': 'Bearer '+localStorage.getItem("access_token"),
            },
          }).then(({ data }) => {
            console.log(data)
          }) 
    }

    render() {
    return (
        <div>
            {this.GetID()}
        </div>
    );
    }
}
