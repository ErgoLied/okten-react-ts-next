import {useForm} from "react-hook-form";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {IAuthDataModel} from "../../models/IAuthDataModel";
import {authService} from "../../services/api.service";
import {authValidator} from "../../validators/auth.validator";

const AuthFormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IAuthDataModel>({
            defaultValues: {username: 'ergolied', password: 'Qwerty12345!'},
            mode: "all",
            resolver: joiResolver(authValidator)
        }
    );

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: IAuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
        window.location.href = '/cars';
    }

    return (
        <div>
            {isAuthState
                ? <h1>WELCOME</h1>
                : <>
                    <h1>SIGN IN</h1>
                    <form onSubmit={handleSubmit(authenticate)}>
                        <input type="text" {...register('username')} placeholder={'username'}/>
                        <input type="text" {...register('password')} placeholder={'password'}/>
                        <button disabled={!isValid}>let me in plz</button>

                        {errors.username && <div>{errors.username.message}</div>}
                        {errors.password && <div>{errors.password.message}</div>}
                    </form>
                </>
            }
        </div>
    );
};

export default AuthFormComponent;