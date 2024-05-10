// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage

import {Dispatch, SetStateAction, useEffect, useState} from "react";

export const useStorage = <T, >(key: string, valueToStore: T[]):[T[], Dispatch<SetStateAction<T[]>>] => {
    const [value, setValue] = useState<T[]>(
        () => {
            const itemInStorage = localStorage.getItem(key);
            return itemInStorage ? JSON.parse(itemInStorage) : valueToStore;
        }
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}