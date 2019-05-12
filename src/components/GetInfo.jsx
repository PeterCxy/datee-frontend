import React, { Component } from 'react';

export default class GetInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            Name:'',
            Age:'',
            Gender:'',
        }
    }

    render() {
    return (
        <div>
        <h1>Welcome!</h1>
        <ul className="navbar-brand">
            <li>Name: {this.state.Name}</li>
            <li>LastName: {user.lastName}</li>
            <li>Email: {user.email}</li>
            <li>Age: {user.age}</li>
            <li>Gender: {user.gender}</li>
            <li>Country: {user.country}</li>
            <li>City: {user.city}</li>
            <li>SelfRatedScore: {user.selfScore}</li>
        </ul>
        </div>
    );
    }
}
