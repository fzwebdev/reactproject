import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Aboutus from './pages/Aboutus';
import Footer from './components/Footer';
import Contactus from './pages/Contactus';
function App() {
    return ( 
        <BrowserRouter>
            <div class="gt_wrapper"> 
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />  
                    <Route path="/about-us" component={Aboutus} />
                    <Route path="/contact-us" component={Contactus} />
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;