import React, { Component } from 'react';
import axios from 'axios'

export default class ShowPhoto extends Component {
    constructor(props){
        super(props);
        this.state={
            photo:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:23456/photos/'+this.props.uid,{
            headers: {
                'authorization': 'Bearer '+localStorage.getItem("access_token"),
            },
          }).then(({ data }) => {
            this.setState({
                photo : data
            })
          }) 
    }
    

    render() {
    return (
        console.log(this.state.photo),
        <div>
            <img src={this.state.photo} alt="???"/>
            <img src={'data:'+this.state.photo} alt="!!!"/>    
            <img src={'data:image/'+this.state.photo} alt="!!!"/>    
        </div>
    );
    }
}
