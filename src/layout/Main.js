import React from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;