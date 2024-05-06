import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Header from './components/Header';
import Home from './pages/Home';
import Data from './components/Data';
import Storagep1 from './components/storage/Storagep1';
import Subscription from "./components/payment/Subscription/Subscription"
import Personal from "./components/Personal"

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/data' element={<Data />} />
                <Route path='/storage' element={<Storagep1 />} />
                <Route path='/payment' element={<Subscription />}/>
                <Route path='/payment' element={<Subscription />}/>
                <Route path='/personal' element={<Personal />}/>
                
            </Routes>
        </Header>
    );
};

export default App;
