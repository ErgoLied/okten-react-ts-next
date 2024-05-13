import React, {useState} from 'react';
import './App.css';
import UsersListComponent from "./components/UsersListComponent/UsersListComponent";

function App() {

    let [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(++counter);
    }

    return (
        <div style={{display: 'flex'}}>
            <UsersListComponent/>
            <div>
                {counter}
                <button onClick={increase}>+</button>
            </div>
        </div>
    );
}

export default App;
