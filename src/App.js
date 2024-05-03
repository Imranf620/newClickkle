import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Header from './components/Header';
import Home from './pages/Home';
import UserTable from './pages/UserTable';
import Users from './pages/Users';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<UserTable />} />
                <Route path='/user' element={<Users />} />
            </Routes>
        </Header>
    );
};

export default App;
