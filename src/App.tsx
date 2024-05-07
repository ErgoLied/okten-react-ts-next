import React from 'react';
import './App.css';
import TogglerComponent from "./components/TogglerComponent/TogglerComponent";
import PreviousComponent from "./components/PreviousComponent/PreviousComponent";
import StorageComponent from "./components/StorageComponent/StorageComponent";

function App() {
    return (
        <div>
            <TogglerComponent/>
            <PreviousComponent/>
            <StorageComponent/>
        </div>
    );
}

export default App;
