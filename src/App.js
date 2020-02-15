import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Aboutus from './pages/Aboutus';
import Footer from './components/Footer';
function App() {
    return ( 
        <BrowserRouter>
            <div class="gt_wrapper"> 
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />  
                    <Route path="/about-us" component={Aboutus} />
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;