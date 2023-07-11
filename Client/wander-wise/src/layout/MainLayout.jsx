import React from 'react';
import '../App.css';
import MyNavBar from '../components/MyNavBar';
import MyFooter from '../components/MyFooter';


const MainLayout = ({ children }) => {
    return (
        <div>
            <MyNavBar />
            <div>{children}</div>
            <MyFooter />
        </div>
    );
};

export default MainLayout;
