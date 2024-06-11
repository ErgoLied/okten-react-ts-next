const retriveLSData = <T, >(key: string) => {
    const pairJSON = localStorage.getItem(key) || '';
    let pair;

    if (pairJSON) {
        pair = JSON.parse(pairJSON);
    } else {
        return {} as T;
    }

    return pair as T;
}

export {retriveLSData}