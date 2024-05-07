// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useRef} from "react";

export const usePrevious = (state: any) => {
    const previuosState = useRef();
    const currentState = useRef(state);

    if (currentState.current !== state){
        previuosState.current = currentState.current;
        currentState.current = state;
    }

    return previuosState.current;
}
