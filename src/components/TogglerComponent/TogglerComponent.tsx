import React, {FC} from 'react';
import {useToggle} from "../../customHooks/useToggle";

const TogglerComponent: FC = () => {

    const [value, toggler] = useToggle(true);

    return (
        <div>
            <h2>Task #1: Toggler</h2>
            <button onClick={() => toggler(value)}>
                {value.toString()}
            </button>
        </div>
    );
};

export default TogglerComponent;