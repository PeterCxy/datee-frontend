import React, { Component } from 'react';
import axios from 'axios'

export default class ShowPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: [],
            isLoaded: false

        }
    }

    componentDidMount() {
        this.getImage()
    }

    getImage = () => {
        fetch('http://localhost:23456/photos/' + this.props.uid, {
            headers: { 'authorization': 'Bearer ' + localStorage.getItem("access_token") }
        }).then((response) => {
            return response.blob()})
            .then(( blob ) => {
                let blobUrl = window.URL.createObjectURL(blob);
                if (!this.state.isLoaded) {
                    console.log(typeof (blobUrl))
                    console.log(blobUrl)
                    this.setState({
                        photo: blobUrl,
                        isLoaded: true
                    })
                }
        })
    }

    render() {
        var source = this.state.photo;
        var myStyle = {float:'left',margin:'20px 50px 20px',borderRadius: '50%',}
        return (
            <div>
                <img src={source} style={myStyle} alt="Loading" width="300" height="300"/>
            </div>
        );
    }
}
