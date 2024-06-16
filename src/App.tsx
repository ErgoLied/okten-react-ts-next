import React from 'react';
import './App.css';
import HeaderComponent from "./components/Header/HeaderComponent";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
}

export default App;
