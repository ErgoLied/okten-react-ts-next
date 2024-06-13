import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
}

export default App;
