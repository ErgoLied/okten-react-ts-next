import {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import IUserModel from "../models/IUserModel";
import {createUser} from "../services/users.api.service";
import {userValidator} from "../validators/user.validator";

import './FormComponent.css';

interface IFormProps extends IUserModel {
}

const FormComponent: FC = () => {

    const [success, setSuccess] = useState('');

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid}
    } = useForm<IFormProps>({mode: "all", resolver: joiResolver(userValidator)});

    const create = (formDataProps: IFormProps) => {
        console.log(formDataProps);
        createUser(formDataProps).then((json) => {
            console.log(json);

            if (json.status === 201) {
                reset();
                setSuccess('success!')
            }
        });

    }

    return (
        <div>
            <div>{success}</div>
            <form onSubmit={handleSubmit(create)}>
                <label>
                    <input type="text" {...register('name')} placeholder={'name'}/>
                    {errors.name && <div>{errors.name.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('username')} placeholder={'username'}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label>
                    <input type="email" {...register('email')} placeholder={'email'}/>
                    {errors.email && <div>{errors.email.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('phone')} placeholder={'phone'}/>
                    {errors.phone && <div>{errors.phone.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('website')} placeholder={'website'}/>
                    {errors.website && <div>{errors.website.message}</div>}
                </label>

                <p>address:</p>
                <label>
                    <input type="text" {...register('address.street')} placeholder={'street'}/>
                    {errors.address?.street && <div>{errors.address.street.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('address.suite')} placeholder={'suite'}/>
                    {errors.address?.suite && <div>{errors.address.suite.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('address.city')} placeholder={'city'}/>
                    {errors.address?.city && <div>{errors.address.city.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('address.zipcode')} placeholder={'zipcode'}/>
                    {errors.address?.zipcode && <div>{errors.address.zipcode.message}</div>}
                </label>

                <p>geo:</p>
                <label>
                    <input type="number" {...register('address.geo.lat')} placeholder={'lat'}/>
                    {errors.address?.geo?.lat && <div>{errors.address.geo.lat.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('address.geo.lng')} placeholder={'lng'}/>
                    {errors.address?.geo?.lng && <div>{errors.address.geo.lng.message}</div>}
                </label>

                <p>company:</p>
                <label>
                    <input type="text" {...register('company.name')} placeholder={'company name'}/>
                    {errors.company?.name && <div>{errors.company.name.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('company.catchPhrase')} placeholder={'catchPhrase'}/>
                    {errors.company?.catchPhrase && <div>{errors.company.catchPhrase.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('company.bs')} placeholder={'bs'}/>
                    {errors.company?.bs && <div>{errors.company.bs.message}</div>}
                </label>

                <button disabled={!isValid}>create</button>
            </form>
        </div>
    );
};

export default FormComponent;