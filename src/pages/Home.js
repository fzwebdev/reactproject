import React,{Component} from "react";
import ReactDOM from "react-dom";
// import logo from './logo.svg';
// import './App.css';
import loadjs from 'loadjs';
import Banner from "../components/Banner";
import Maincontent from "../components/Maincontent";

class Home extends Component {
    componentWillMount() {
        loadjs('../assets/js/custom.js');
        loadjs('../assets/css/aos/aos.js');
        // loadjs('/static/js/scripts.js', function() {
        // })
      }
  render() {
    return (
        <div class="gt_wrapper">
            <Banner/>
            <Maincontent/>
        </div>
    );
  }
}

export default Home;