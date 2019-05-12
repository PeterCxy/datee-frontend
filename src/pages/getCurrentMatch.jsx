import React, { Component } from 'react';
import axios from 'axios'
import ShowPhoto from '../components/ShowPhoto'
import heart from '../images/heart.png'
import brokenHeart from '../images/broken-heart.png'
import iLoveYou from '../images/i-love-you.png'

export default class getCurrentMatch extends Component {
    constructor(props){
        super(props);
        this.state={
            some_uid:[]
        }
    }

    componentDidMount(){
        this.getCurrent()
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

    getCurrent = () => {
        let users = JSON.parse(localStorage.getItem('users'))
        let randomUser = users[Math.floor(Math.random()*users.length)]
        console.log(randomUser)
        axios.get('http://localhost:23456/photos/list/'+randomUser,{
            headers: {
                'authorization': 'Bearer '+localStorage.getItem("access_token")
            }
            }).then(({ data }) => {
                if(data){
                    let c = []
                    c.push(data.result[0])
                    this.setState({
                        some_uid : c,
                    })
                }
            })
    }

    onClick = () =>{
        console.log('wrnm')
    }

    render() {
    return (
        console.log('wrnm'),
        console.log(this.state.some_uid[0]),
        <div>
            <div className="profile_banner">
            <div className="container"> 
                <h3>We've selected a matching user for you, and now you can start dating!</h3>
            </div>
            </div>
            
            {this.state.some_uid.map((id)=>{
                    return (
                        <div>
                        <div className="col-md-3"></div>
                        <ShowPhoto uid={id} />
                        <img src={iLoveYou} style={{marginTop:'50px',marginLeft:'100px'}}alt="iLoveYou"/>
                        </div>
                    )
            })}


            <div style={{clear:'both',textAlign:'center'}}>
                {/* <img src={heart} onclick={console.log('wcnm')} width="300px" height="300px" alt="heart"></img>
                <input type="image" src={heart} onclick={this.onClick} alt="heart" name="img" value=""/>
                <img src={brokenHeart} width="300px" height="300px" alt="brokenHeart"></img> */}
                <button className="acount-btn" type="submit" onClick={() => {
                    window.alert('Now you can try to have a date~')
                    this.props.history.push('/whoami')
                }}>
                Dating!!!♪(＾∀＾●)ﾉ
                </button>
                <button className="acount-btn" type="submit" onClick={() => {
                    window.alert('Oops...Wish you meet the right person later~')
                    this.props.history.push('/whoami')
                }}>
                Reject...(┬＿┬)
                </button>
            </div>
            
            <div class="clear-fix"></div>

        </div>
    );
    }
}
