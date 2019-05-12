import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './pages/index.jsx'
import Login from './pages/login.jsx'
import Regist from './pages/register.jsx'
import photoUpload from './pages/photoUpload.jsx'
import whoami from './pages/whoami.jsx'
import assessAndPrefer from './pages/assessAndPrefer.jsx'
import photoListing from './pages/photoListing.jsx';
import rateSelf from './pages/rateSelf.jsx'
import rateOthers from './pages/rateOthers.jsx'
import getCurrentMatch from './pages/getCurrentMatch.jsx'

function App() {
  return (
    <BrowserRouter basname='/'>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Regist}/>
      <Route path='/index' component={Index}/>
      <Route path='/photoUpload' component={photoUpload}/>
      <Route path='/whoami' component={whoami}/>
      <Route path='/assessAndPrefer' component={assessAndPrefer}/>
      <Route path='/photoListing' component={photoListing}/>
      <Route path='/rateSelf' component={rateSelf}/>
      <Route path='/rateOthers' component={rateOthers}/>
      <Route path='/getCurrentMatch' component={getCurrentMatch}/>
    </BrowserRouter>
  );
}


export default App;
