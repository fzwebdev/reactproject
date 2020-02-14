import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Banner from "../components/Banner";
import Maincontent from "../components/Maincontent";
function Home() {
    return ( 
        <div class="gt_wrapper">
            <Banner/>
            <Maincontent/>
        </div>
    );
}

export default Home;