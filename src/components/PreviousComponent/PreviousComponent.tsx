import React, {FC, useState} from 'react';
import {usePrevious} from "../../customHooks/usePrevious";

const PreviousComponent: FC = () => {

    let [x, setX] = useState<number>(0);
    const inc = () => {
        setX(++x);
    };

    let prevX = usePrevious(x);

    return (
        <div>
            <h2>Task #2: Previous value of a variable</h2>
            <span>{x}, previous: {prevX}</span>
            <button onClick={inc}>+</button>
        </div>
    );
};

export default PreviousComponent;