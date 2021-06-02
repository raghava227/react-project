iimport React from "react";
import "./App.css";
import Home from './components/home';
//import About from './components/about';
//import Contact from './components/contact';
import {BrowserRouter as Router} from "react-router-dom";
//import {BrowserRouter} from 'react-router-dom';

//import Raghava from "./components/Raghava";


class App extends React.Component{

  render(){
    return (

      <Router>
        <div>
          <h2>welcome to raghava</h2>
          <ul>
            <li>
              
            </li>
          </ul>
        </div>
      </Router>

    );
  }
};

export default App;
