import {FC} from 'react';

export const WithUserDetails = (Component: FC) => {

    const WrapperComponent = (props: any) => {
        return (
            <Component {...props}/>
        )
    }

    return WrapperComponent;
};
