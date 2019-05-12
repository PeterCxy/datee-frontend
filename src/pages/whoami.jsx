import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class SelfInfo extends React.Component{
    render(){
        let user=this.props.user;
        user.gender=user.gender? 'Male':'Female';
        user.country=user.country? 'China':'*';
        user.city=user.city? 'Suzhou':'*'
        return(
            <div>
                <h1>Welcome!</h1>
                <ul className="navbar-brand">
                    <li>FirstName: {user.firstName}</li>
                    <li>LastName: {user.lastName}</li>
                    <li>Email: {user.email}</li>
                    <li>Age: {user.age}</li>
                    <li>Gender: {user.gender}</li>
                    <li>Country: {user.country}</li>
                    <li>City: {user.city}</li>
                    <li>SelfRatedScore: {user.selfScore}</li>
                </ul>
            </div>
        )
    }
}

class SelfFunc extends React.Component{
    render(){
        return(
            <div>
                <Link className="navbar-brand" to="/photoUpload">Upload my photos</Link>
                <br></br>
                <Link className="navbar-brand" to="/photoListing">List my photos</Link>
                <br></br>
                <Link className="navbar-brand" to="/assessAndPrefer">Complete my selfAssessment and matchingPreference</Link>
                <br></br>
                <Link className="navbar-brand" to="/rateSelf">Rate myself</Link>
                <br></br>
                <Link className="navbar-brand" to="/rateOthers">Rate other user</Link>    
                <br></br>
            </div>
        )
    }
}


class whoami extends React.Component {
    constructor(props){
        super(props);
        this.state={
            uid:'',
            email:'',
            firstName:'',
            lastName:'',
            age:'',
            gender:'',
            country:'',
            city:'',
            state:'',
            selfScore:'',
            isLoaded:false
        }
    }

    componentDidMount(){
        axios.get('http://localhost:23456/user/whoami',{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'authorization': 'Bearer '+localStorage.getItem("access_token")
            }
          }).then(({ data }) => {
            console.log(data);
            if(data.ok){
                const user=data.result;
                this.setState({
                    uid:user.uid,
                    email:user.email,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    age:user.age,
                    gender:user.gender,
                    country:user.country,
                    city:user.city,
                    state:user.state,
                    isLoaded:true
                })
                localStorage.setItem('uid',user.uid);
                console.log(this.state.uid);
            }
          })
    }

    
    getSelfRate=()=>{
        axios.get('http://localhost:23456/rate/my',{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': 'Bearer '+localStorage.getItem("access_token"),
            },
        }).then(({ data }) => {
            this.setState({
                selfScore:data.result
            })
        })
    }

    render() {
        if(!this.state.isLoaded){
            return (
                <div>Loading</div>
            )
        }
        return (
        <div>
            {this.getSelfRate()}
            <div className="profile_banner">
            <div className="container"> 
                <h3>My Center</h3>
            </div>
            </div>
            <center>
            <SelfInfo user={this.state}/>
            <SelfFunc />
            </center>
        </div>
        )
    }
}

export default whoami;
