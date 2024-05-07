// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

import {useState} from "react";

export const useToggle = (currentValue: boolean): [boolean, (value: boolean) => void] => {
    const [value, setValue] = useState<boolean>(currentValue);

    const toggler = (value: boolean) => {
        setValue(!value);
    }

    return [value, toggler];
}