import {FC} from 'react';

type IProps = {
    details: (userEmail: string, userPhone: string) => void;
}

export const WithUserDetails = <T,>(Component: FC<T & IProps>) => {

    const WrapperComponent: FC<T> = (props) => {

        const details = (userEmail: string, userPhone: string) => {
            return <div>
                <p>{userEmail}</p>
                <p>{userPhone}</p>
            </div>
        }

        return (
            <Component {...props} details={details}/>
        )
    }

    return WrapperComponent;
};
