
import {reneder} from 'react-dom'
import React from 'react';
import './style_irn.css'
import Header from './components_2.0/Head';
import { Button } from "react-bootstrap"

import Footer from './components_2.0/Foot';
import 'bootstrap/dist/css/bootstrap.min.css'
import AvatarEditor from 'react-avatar-editor'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import ReactDOM from 'react-dom';




import Home from './Home';
import LinkOne from './LinkOne';
const App=()=> {
  return (
    <>
    
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path ="/" index element = {<Home/>} /> 
        <Route path ="/link1" element = {<LinkOne/>} />
      </Routes>
  </BrowserRouter>
  <Footer/>
  
      </>


  
  );
}

export default App;
