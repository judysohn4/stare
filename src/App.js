import './App.css';
import './index.css'
import {Route, Routes} from "react-router-dom"
import {useState} from 'react';
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Legal from "./Legal";
import Comments from "./Comments";
import Roe from './Roe';
import News from './News'
import Podcast from './Podcast'
import Web from './Web'
import Contribute from './Contribute'
import Affirmative from './Affirmative'
import Bostock from './Bostock'

const App = () => {
  return (
    <div className="App">
        <Navbar / >
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/legal" element = {<Legal/>}/>
          <Route path = "/news" element = {<News/>}/>
          <Route path = "/podcast" element = {<Podcast/>}/>
          <Route path = "/web" element = {<Web/>}/>
          <Route path = "/roe" element = {<Roe/>}/>
          <Route path = "/affirmative" element = {<Affirmative/>}/>
          <Route path = "/bostock" element = {<Bostock/>}/>
          <Route path = "/contribute" element = {<Contribute/>}/>
        </Routes>
    </div>
);
}

export default App;
