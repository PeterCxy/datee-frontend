import React, { Component } from 'react';
import axios from 'axios'
import ShowPhoto from '../components/ShowPhoto'

export default class photoListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            photos : [],
            isLoaded : false,
            bphotos : ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:23456/photos/list/'+localStorage.getItem('uid'),{
            headers: {
                'authorization': 'Bearer '+localStorage.getItem("access_token")
            }
          }).then(({ data }) => {
            if(!this.state.isLoaded){
                this.setState({
                    photos : data.result,
                    isLoaded : true
                })
            }
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
                <div className="profile_banner">
                <div className="container"> 
                    <h3>List my photos</h3>
                </div>
                </div>
                {this.state.photos.map((id)=>{
                    return (
                        <ShowPhoto uid={id} />
                    )
                })}
            </div>
        )
    }
}
