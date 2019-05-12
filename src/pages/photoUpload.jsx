import React, { PureComponent } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'

export default class photoUpload extends PureComponent {
    state = {
        path: '',
        preview: null,
        data: null
    }
    
    changePath = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        let src,preview;
        src = URL.createObjectURL(file)
        preview = <img src={src} alt='' width="300" height="300"/>
        this.setState({ path: file.name, data: file, preview: preview });
        console.log(src)
    }

    upload = (e) => {
        e.preventDefault();
        if(this.state.data==null){
            alert('File not selected');
            return;
        }
        console.log(this.state.data);
        var fd=new FormData();
        fd.append('photo',this.state.data);
        console.log(fd)
        console.log(this.state.data)
        console.log(typeof(this.state.data))
        var f = 0
        axios.put('http://localhost:23456/photos/upload',fd,{
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer '+localStorage.getItem("access_token"),
              'uid':localStorage.getItem('uid')
            }
          }).then(({ res }) => {
                window.alert('Upload successfully')
          })
    }

    cancel = () => {
        this.setState  ({
            path: '',
            preview: null,
            data: null
        })
    }

    render() {
        const preview = this.state.preview;
        return (
            <div>
                <div className="profile_banner">
                <div className="container"> 
                    <h3>UploadPicture</h3>
                </div>
                </div>
                <center>
                <div className='container'>
                    <h4>Select Photo Path</h4>
                    <div className='row-input'>
                        <input type='file' accept='image/*' class="btn" onChange={this.changePath} />
                    </div>
                </div>
                <div className='media'>
                    <center>{preview}</center>
                </div>
                <button className='container' onClick={this.upload}>Upload</button>
                <button className='container' onClick={this.cancel}>Cancel</button>
                </center>
            </div>
        )
    }
}

